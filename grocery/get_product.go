package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
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
	for _, g := range groceries {
		fmt.Printf("g : %+v", g)
	}
	/*
		var products []Product
		url := "https://api-ayaline.marjane.ma/front/products?fetchMode=list&type[]=product&to_sell=true&status=VALIDATED&search=sauce&autocomplete=true&range=1-10&"
		res, err := http.Get(url)

		if err != nil || res.Body == nil {
			log.Fatal("Failed to get products !", err)
		}


		decoder := json.NewDecoder(res.Body)
		err = decoder.Decode(&products)

		for _, p := range products {
			fmt.Printf("product : %+v \n", p)
			fmt.Println("---------------------------------")
		}

		if err != nil {
			log.Fatal("Error accured decoding products json data !", err)
		}
	*/
}
