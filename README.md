# Discord Rich Presence
## USTAWIENIE
- Musisz mieć aplikację utworzoną w [Discord Developers Portal](https://discord.com/developers/applications) 
- Jeśli jeszcze jej nie masz, utwórz ją i umieść jej identyfikator w config.json zastępując "ID-APLIKACJI" z Twoim identyfikatorem między "". 
- W aplikacji przejdź do Rich Presence > Art Assets i prześlij wybrane zdjęcie.
- Nazwy zdjęć, które przsłałeś muszą być również ustawione w "key".
- Na koniec, po skonfigurowaniu całego tego gówna, po prostu uruchom launch.bat.
- Ciesz się!

## KONFIGURACJA
```json
{
	"client": {
		"id": "ID-APLIKACJI"
	},
	"text": {
		"details": {
			"text":"PIERWSZY-TEKST-OBOK-OBRAZKA"
		},
		"state": {
			"text":"DRUGI-TEKST-OBOK-OBRAZKA"
		}
	},
	"images": {
		"large": {
			"key": "NAZWA-DUŻEGO-OBRAZU",
			"text": "NAZWA-WYŚWIETLANA"
		},
		"small": {
			"key":"NAZWA-MAŁEGO-OBRAZU",
			"text":"NAZWA-WYŚWIETLANA"
		}
	},
	"buttons": {
		"one": {
			"name":"PRZYCISK",
			"url":"LINK-URL"
		},
		"two": {
			"name":"PRZYCISK",
			"url":"LINK-URL"
		}
	}
}
````
- Wynik:
