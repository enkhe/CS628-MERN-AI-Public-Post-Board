# App Guide 001 - Run the Frontend (React) and Backend (Express, Ollama[Gemma2:2b]).

## 1. Ollama 

### 1.a - Terminal 01: Pull Ollama
```sh
curl -fsSL https://ollama.com/install.sh | sh
```

### 1.b - Terminal 01: Run Ollama
```sh
ollama serve
```

### 1.c - Terminal 02: Pull Gemma2:2b
```sh 
ollama pull gemma2:2b
```

### 1.d - Terminal 02: Run Gemma2:2b
```sh 
ollama run gemma2:2b
```


## 2. Run Backend

### 2.a - Terminal 03: Run Backend
```sh
cd backend
npm install
npm start
```

### 2.b - Terminal 04: Make backend app: public
```sh
gh codespace ports visibility 3001:public -c $CODESPACE_NAME
```

## 3. - Terminal 05: Run frontend
```sh
cd frontend
npm install
npm start
```
