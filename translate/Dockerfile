FROM golang:1.18

WORKDIR /app

COPY . .

RUN go get github.com/bas24/googletranslatefree 

EXPOSE 3040

CMD ["go", "run", "main.go"]
