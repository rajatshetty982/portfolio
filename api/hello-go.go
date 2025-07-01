// api/hello-go.go
package handler

import (
	"encoding/json"
	"net/http"
)

// Response struct for JSON output
type Response struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

// Handler is the entry point for the Vercel Serverless Function
func Handler(w http.ResponseWriter, r *http.Request) {
	// Set the Content-Type header to application/json
	w.Header().Set("Content-Type", "application/json")

	// Check if the request method is GET. You can extend this for POST, PUT, DELETE etc.
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Create a response object
	resp := Response{
		Message: "Hello from your Go Backend on Vercel! Go build something amazing!",
		Status:  "success",
	}

	// Encode the response object to JSON and write it to the response writer
	if err := json.NewEncoder(w).Encode(resp); err != nil {
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}
