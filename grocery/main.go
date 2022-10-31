package main

import (
	"encoding/json"
	"fmt"

	//"io/ioutil"
	"log"
	"net/http"
)

type IngredientResponse struct {
	Ingredients string `json:ingredients`
}

type GroceryRaw struct {
	Text string
	Id   string
}

const (
	URL = "http://localhost:4000/grocery"
)

func main() {

	res, err := http.Get(URL)

	if err != nil {
		log.Fatal("error getting groceries !")
	}

	var ingredients []IngredientResponse
	decoder := json.NewDecoder(res.Body)
	decoder.Decode(&ingredients)
	for _, ing := range ingredients {
		fmt.Println("ing => ", ing.Ingredients)
	}
}
