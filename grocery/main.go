package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	gt "github.com/bas24/googletranslatefree"
	"github.com/google/uuid"
)

type IngredientResponse struct {
	Ingredients string `json:ingredients`
}

type GroceryRaw struct {
	Text       string
	Id         string
	Translated string
}

const (
	URL = "http://localhost:4000/grocery"
)

func printGroceries(groceries []GroceryRaw) {
	for _, g := range groceries {
		fmt.Printf("-> %+v \n", g)
	}
}

func main() {

	res, err := http.Get(URL)
	var ingredients []IngredientResponse
	var groceries []GroceryRaw

	if err != nil {
		log.Fatal("error getting groceries !")
	}

	result, _ := gt.Translate("chiken wings", "en", "fr")
	fmt.Printf("translte : %s \n", result)

	decoder := json.NewDecoder(res.Body)
	decoder.Decode(&ingredients)
	for _, ing := range ingredients {
		id := uuid.New()
		groceries = append(groceries,
			GroceryRaw{Text: ing.Ingredients, Translated: "none", Id: id.String()})
	}
	printGroceries(groceries)
	// tranlate groceries to frensh !
	for i := range groceries {
		result, _ := gt.Translate(groceries[i].Text, "en", "fr")
		groceries[i].Translated = result
		fmt.Printf("translated : %+v\n", groceries[i])
		time.Sleep(time.Second)
	}
	fmt.Println("-------------------------------------")
	printGroceries(groceries)
}
