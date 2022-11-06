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
	Amount float64 `json:"amount"`
}

type Instruction struct {
	Txt   string `json:"txt"`
	Index int    `json:"index"`
}

type InsReq struct {
	Target       string        `josn:"target"`
	Instructions []Instruction `json:"instructions"`
}

type IngReq struct {
	Ingredients []Ingredient `json:"ingredients"`
	Target      string       `json:"target"`
}

func HandleTranslateInstruction(w http.ResponseWriter, r *http.Request) {
	var req InsReq
	var translated []Instruction

	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&req)

	for _, inst := range req.Instructions {
		res, _ := gt.Translate(inst.Txt, "en", req.Target)
		translated = append(translated, Instruction{Txt: res, Index: inst.Index})
	}
	data, err := json.Marshal(translated)
	if err != nil {
		log.Fatal("Error accured while encoding instructions ", err)
	}
	w.Header().Add("content-type", "application/json")
	w.Write(data)
}

func HandleTranslateIngredient(w http.ResponseWriter, r *http.Request) {

	var req IngReq
	var translated []Ingredient

	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&req)

	for _, ing := range req.Ingredients {
		txtT, _ := gt.Translate(ing.Txt, "en", req.Target)

		unitT := ing.Unit
		if ing.Unit == "teaspoon" || ing.Unit == "tablespoon" {
			unitT, _ = gt.Translate(ing.Unit, "en", req.Target)
		}
		translated = append(translated, Ingredient{Txt: txtT, Amount: ing.Amount, Unit: unitT})
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
	mux.HandleFunc("/instructions", HandleTranslateInstruction)

	fmt.Println("🚀 Server running at http:localhost:3040")
	err := http.ListenAndServe(":3040", mux)

	if err != nil {
		log.Fatal("Error accured while starting server !", err)
	}

	//fmt.Println("👋 Hello world !")

}
