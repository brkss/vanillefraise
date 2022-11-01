package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
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
	URL  = "http://localhost:4000/grocery"
	PORT = 3033
)

func main() {

}

func IngredientToGroceries() {
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
	// tranlate groceries to frensh !
	for i, grocery := range groceries {
		if grocery.Text != "" {
			result, err := gt.Translate(groceries[i].Text, "en", "fr")
			if err != nil {
				fmt.Println("Failt to translate : ", groceries[i].Text)
				continue
			}
			groceries[i].Translated = result
			fmt.Printf("translated : %+v\n", groceries[i])
			time.Sleep(3 * time.Second)
		}
	}
	data, err := json.MarshalIndent(groceries, "", "\t")
	ioutil.WriteFile("data.json", data, 0644)
	fmt.Println("----------------- 👋 saved to data.json --------------------")
	//printGroceries(groceries)
}
