package handler

import "net/http"

func statHandler(w http.ResponseWriter, r *http.Request) (allJson string) {

w.Header().Set("Content-Type", "application/json")

	// Check if the request method is GET. You can extend this for POST, PUT, DELETE etc.
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// get the github stats
	// get leet code stats
	return allJson
}
