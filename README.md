# Discord Rich Presence (WITH BUTTONS) !!
- Discord RPC with 2 clickable buttons and more!

## USTAWIENIE
- Musisz mieć aplikację utworzoną w [Discord Developers Portal](https://discord.com/developers/applications) 
- Jeśli jeszcze jej nie masz, utwórz ją i umieść jej identyfikator w config.json > wiersz 2 zastępując „ID-TUTAJ” z Twoim identyfikatorem między „”. 
- W aplikacji przejdź do Rich Presence > Art Assets i prześlij wybrane zdjęcie. 
- Jakkolwiek nazwiesz to zdjęcie, musisz wstawić to w config,json > wiersz 3, zastępując "NAZWA-DUŻEGO-OBRAZU" nazwą pomiędzy "". 
- Umieść dowolny tekst w configjson > wiersz 4, który pojawi się po kliknięciu obrazu. 
- Umieść dowolny tekst dla szczegółów, które będą wyświetlane obok dużego obrazu w config.json > linia 5. 
- Ostatnie 4 linie są bardzo objaśniające. Po prostu nazwij swoje nazwy przycisków i odpowiednio adres URL! 
- Musisz mieć uruchomioną grę w swojej aplikacji Discord, aby połączyć się ze statusem RPC! 
- Na koniec, po skonfigurowaniu całego tego gówna, po prostu uruchom launch.bat !! 
- Cieszyć się!

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
			"key": "NAZWA-IKONY-W-APLIKACJI",
			"text": "NAZWA-WYŚWITLANA"
		},
		"small": {
			"key":"NAZWA-IKONY-W-APLIKACJI",
			"text":"NAZWA-WYŚWITLANA"
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
