package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type ProductPrice struct {
	Price float64 `json:"price_ttc"`
}

type Product struct {
	Label       string         `json:"default_label"`
	Description string         `json:"description"`
	price       []ProductPrice `json:"prices"`
	image       string         `json:"thumbnail_picture"`
}

var ps string = `[{"title": "a", "id": 1, "userId": 1, "body": "test"}]`

func main() {

	resp, err := http.Get("https://api-ayaline.marjane.ma/front/products?fetchMode=list&type[]=product&to_sell=true&status=VALIDATED&search=flacon%20d%27avoine&autocomplete=true&range=1-10&")
	if err != nil {
		log.Fatal("Error getting posts : ", err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	sb := string(body)
	if err != nil || sb == "" {
		log.Fatal("Error reading data : ", err)
	}

	var products []Product
	json.Unmarshal([]byte(sb), &products)

	fmt.Printf("title: %s \ndescription %s \n", products[0].Label, products[0].Description)
	/*
		for _, post := range posts {
			fmt.Println("id: ", post.id, " title: ", post.title)
		}*/
	//sb := string(body)
	//fmt.Println(sb)

}
