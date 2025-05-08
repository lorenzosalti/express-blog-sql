# Express Blog SQL

Prendere le API precedentemente create per il blog ed aggiungere la persistenza tramite la connessione a un DB.

### Milestone 1

- Importare il db in allegato su MySQL Workbench.
- Installare il client **mysql2** con ```npm i mysql2``` nell’app Express.
- Creare un file di configurazione per connettere il database.
- Inserire un console.log nella logica di connessione e provare ad avviare l’applicazione per verificare che non ci siano errori.

### Milestone 2

- Far sì che l’API di INDEX restituisca la lista di post recuperata dal database in formato JSON.
- Verificare su Postman che la risposta sia corretta.

### Milestone 3

- Far sì che l’API di DESTROY permetta di eliminare un post dal database.
- Verificare su Postman che la chiamata non dia errore e risponda 204.
- Verificare su MySQL Workbench che il post venga effettivamente rimosso.

### Milestone 4

- Far sì che l’API di SHOW restituisca il post desiderato in formato JSON.
- Verificare su Postman che la risposta sia corretta.

### Bonus:

- Far sì che la SHOW restituisca il post comprensivo di tag, recuperandoli grazie alla relazione tra post e tags, esistente sul database.