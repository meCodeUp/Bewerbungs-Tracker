# 📂 Bewerbungs-Tracker (PWA)
Ein einfacher und benutzerfreundlicher Bewerbungs-Tracker als Progressive Web App (PWA), mit dem du deine Bewerbungen verwalten, exportieren und importieren kannst. 

## 🚀 Features
- **📝 Bewerbungen speichern:** Erfasse Firma, Stellenbezeichnung, Datum, Status, Notizen & mehr  
- **🔄 Automatische Status-Aktualisierung:**  
  - Nach 2 Tagen → "Warten auf Antwort"  
  - Nach 10 Tagen → "Nachfragen"  
- **📂 CSV-Import & Export:** Einfache Verwaltung von Bewerbungen als CSV-Datei  
- **📚 PDF-Export:** Erstelle einen Monatsbericht mit Bewerbungsdetails und Screenshots  
- **🌐 Installierbar als PWA (Coming Soon)**  
- **🛠️ Lokale Speicherung:** Alle Daten werden im Browser gespeichert  

## 📷 Screenshots
### 📌 Bewerbungen verwalten  
![Screenshot](screenshots/bewerbungen-uebersicht.png)  

### 📌 PDF-Export  
![Screenshot](screenshots/pdf-export.png)  

## 🛠️ Installation & Nutzung
### 1. Web-Version nutzen
Einfach die Seite im Browser öffnen, und die App kann direkt genutzt werden.  

### 2. Lokal installieren (Coming Soon)
Falls du die App lokal betreiben möchtest:
```bash
git clone https://github.com/dein-github-username/bewerbungs-tracker.git
cd bewerbungs-tracker
```

Öffne `index.html` in einem Browser oder nutze einen lokalen Webserver (z. B. `npx http-server`). Beachte, dass die App nur über einen **localhost-Server** oder online über **HTTPS** funktioniert. Eine direkte Dateiöffnung (`file://`) wird nicht unterstützt.

## 🔄 CSV-Format
Beim Export wird folgendes CSV-Format verwendet:  
```csv
Firma,Stelle,Datum,Status,Link,Notizen,Screenshot
"Firma X","Softwareentwickler","2024-02-01","Warten auf Antwort","https://joblink.com","Interessante Stelle","screenshot-url"
```
- **Import-Funktion:** Verhindert doppelte Einträge (Firma + Stelle + Datum).  

## 📃 Lizenz
Dieses Projekt steht unter der **MIT-Lizenz** – freie Nutzung & Anpassung erlaubt. Falls du Anpassungen oder Erweiterungen vornimmst, kannst du mich gerne informieren – ich würde mich über einen Austausch freuen!  

---

💡 **Feedback & Ideen?** Starte eine Diskussion oder erstelle ein Issue!  
🌟 **Gefällt dir das Projekt?** Lass ein ⭐ im Repository da!  

