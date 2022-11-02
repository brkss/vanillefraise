package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	gt "github.com/bas24/googletranslatefree"
)

type Ingredient struct {
	Txt    string  `json:"txt"`
	Unit   string  `json:"unit"`
	Amount float64 `json:amount`
}

type Req struct {
	Ingredients []Ingredient `json:"ingredients"`
	Target      string       `json:"target"`
}

func HandleTranslateIngredient(w http.ResponseWriter, r *http.Request) {

	var req Req
	var translated []Ingredient

	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&req)

	for _, ing := range req.Ingredients {
		txtT, _ := gt.Translate(ing.Txt, "en", req.Target)
		translated = append(translated, Ingredient{Txt: txtT, Amount: ing.Amount, Unit: ing.Unit})
	}
	data, err := json.Marshal(translated)
	if err != nil {
		log.Fatal("error accured while encoding json !", err)
	}

	w.Header().Add("content-type", "application/json")
	w.Write(data)
	return
}

func main() {

	mux := http.NewServeMux()

	mux.HandleFunc("/ingredients", HandleTranslateIngredient)

	fmt.Println("🚀 Server running at http:localhost:3040")
	err := http.ListenAndServe(":3040", mux)

	if err != nil {
		log.Fatal("Error accured while starting server !", err)
	}

	//fmt.Println("👋 Hello world !")

}
