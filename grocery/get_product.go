package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

type ProductPrice struct {
	Price float64 `json:"price_ttc"`
}

type Product struct {
	Description string         `json:"description"`
	Label       string         `json:"default_label"`
	Prices      []ProductPrice `json:"prices"`
	Image       string         `json:"default_picture"`
	Uuid        string         `json:"uuid"`
}
type Grocery struct {
	Text       string
	Translated string
	Id         string
}

type ProductGrocery struct {
	Grocery Grocery
	Product Product
}

func GetGroceries() []Grocery {
	var groceries []Grocery

	data, err := ioutil.ReadFile("./data.json")
	if err != nil {
		log.Fatal("Error accured reading the data file !", err)
	}
	reader := bytes.NewReader(data)
	decoder := json.NewDecoder(reader)
	decoder.Decode(&groceries)
	return groceries
}

func main() {
	groceries := GetGroceries()
	var gp []ProductGrocery
	for i, g := range groceries {
		var products []Product
		url := fmt.Sprintf("https://api-ayaline.marjane.ma/front/products?fetchMode=list&type[]=product&to_sell=true&status=VALIDATED&search=%s&autocomplete=true&range=1-10&", url.QueryEscape(g.Translated))
		fmt.Printf("URL : %s\n", url)
		res, err := http.Get(url)
		if err != nil {
			log.Fatal("Error accured getting products : ", err)

		}
		decoder := json.NewDecoder(res.Body)
		err = decoder.Decode(&products)
		if err != nil {
			log.Fatal("Error accured while decoding the data !", err)
		}
		gp = append(gp, ProductGrocery{Product: products[0], Grocery: g})
		fmt.Printf("[%d] : DONE !", i+1)
	}

	fmt.Println("------------ SAVING ... -------")
	data, err := json.MarshalIndent(gp, "", "\t")
	if err != nil {
		log.Fatal("Something went wrong marshlling data", err)
	}
	err = ioutil.WriteFile("products.json", data, 0644)
	if err != nil {
		log.Panic("Error accured while writing data to file !", err)
	}
	fmt.Println("------------------ 👍 SAVED ! --------------")

}
