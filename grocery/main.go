package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Post struct {
	title  string
	id     int64
	userId int64
	body   string
}

var ps string = `[{"title": "a", "id": 1, "userId": 1, "body": "test"}]`

func main() {

	resp, err := http.Get("https://jsonplaceholder.typicode.com/posts")
	if err != nil {
		log.Fatal("Error getting posts : ", err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	sb := string(body)
	if err != nil || sb == "" {
		log.Fatal("Error reading data : ", err)
	}

	//fmt.Println(string(body))
	var posts []Post
	//json.NewDecoder(resp.Body).Decode(&posts)
	json.Unmarshal([]byte(ps), &posts)
	fmt.Printf("id: %d \n title %s \n", posts[0].id, posts[0].title)
	/*
		for _, post := range posts {
			fmt.Println("id: ", post.id, " title: ", post.title)
		}*/
	//sb := string(body)
	//fmt.Println(sb)

}
