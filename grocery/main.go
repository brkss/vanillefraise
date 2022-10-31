package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/google/uuid"
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
	var ingredients []IngredientResponse
	var groceries []GroceryRaw

	if err != nil {
		log.Fatal("error getting groceries !")
	}

	decoder := json.NewDecoder(res.Body)
	decoder.Decode(&ingredients)
	for _, ing := range ingredients {
		id := uuid.New()
		groceries = append(groceries, GroceryRaw{Text: ing.Ingredients, Id: id.String()})
		fmt.Println("ing => ", ing.Ingredients)
	}
}
