
# intermediate Express : 
- **ejs:** 
emabedded java script 
ist html in dem man auch javascript verwenden kann. 
die ejs-datein müssen im verzeichnis **views** angelegt werden. 
- **die Verwendung :**
javascript code in html 
1. js code, das rückgabewert hat : 
> `<%= %>`
2. js logical-code(if, for ..) : 
bemerkung dieses code muss am ende und am anfange geschrieben werden. 
> ` <% %> `

die ejs-datein werden an den clinet mit dem 
> `res.render(dateiname)`

gesendet. die render-methode sucht automatisch nach den gesendeten datein im **views** verzeichnis.

**ejs styling :**
dafür muss man die datei **public** erstellen( die datei muss nicht public genannt werden.) 

aber damit express die datei **public** sieht muss man express mitteilen, dass die datei existiert : 
> `app.use(express.static('dateiname'));`

app.set('view engine', 'ejs') express mitteilen dass die datein in views von type ejs
=> res.reder('home') anstatt 'home.js' 
