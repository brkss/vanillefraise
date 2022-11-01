package main

import (
	//"bytes"
	"encoding/json"
	"fmt"

	//"io"
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

func handleGetGroceries(w http.ResponseWriter, r *http.Request) {

	//var groceries []GroceryRaw

	data, err := ioutil.ReadFile("data.json")
	if err != nil {
		log.Panic("Semething went wrong reading data from the file !", err)
	}
	/*
		reader := bytes.NewReader(data)
		decoder := json.NewDecoder(reader)
		err = decoder.Decode(&groceries)
		if err != nil {
			log.Panic("Error accured while decoding json data !")
		}
	*/
	w.Header().Add("content-type", "application/json")
	w.Write(data)

}

func main() {

	mux := http.NewServeMux()

	mux.HandleFunc("/groceries", handleGetGroceries)
	log.Print("🚀 server running on http://localhost:3033")
	err := http.ListenAndServe(":3033", mux)

	if err != nil {
		log.Fatal("Something went wrong running the server : ", err)
	}

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
	err = ioutil.WriteFile("data.json", data, 0644)
	if err != nil {
		log.Panic("Something went wrong  writing data to file !", err)
	}
	fmt.Println("----------------- 👋 saved to data.json --------------------")

	//printGroceries(groceries)
}
