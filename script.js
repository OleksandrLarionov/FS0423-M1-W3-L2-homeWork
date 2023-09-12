 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
        const myTitle = document.getElementsByTagName('h1')[0]
         myTitle.innerText = 'Benvenuto nella mia Pagina di Esercizzi'
         
       }
       changeTitle()
        
       /* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */
   
       const addClassToTitle = function () {
        const myTitle = document.getElementsByTagName('h1')[0]
        myTitle.classList.add('class-title')
   
       }
       addClassToTitle()
       /* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */
   
       const changePcontent = function () {
        const myAllP = document.getElementsByTagName('p')[0]
        myAllP.innerText = 'Ciao belli!'
       }
       changePcontent()
       /* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */
   
       const changeUrls = function () {
        const changeBodyLinks = document.querySelector('a');
        changeBodyLinks.setAttribute('href', 'https://www.google.com')
   
       }
        changeUrls()
       /* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */
   
       const addToTheSecond = function () {
      const secondNotOrderedList = document.getElementById('secondList')
      const newLi = document.createElement('li')
      newLi.innerText = ' Ciao sono Nuovo!'
      secondNotOrderedList.appendChild(newLi)
   
       }

       addToTheSecond()
   
       /* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */
   
       const addParagraph = function () {
      const addNewParagraph = document.querySelectorAll('div')[3]
      const newParagraph = document.createElement('p')
      newParagraph.innerText = 'Sono nuovo Paragrafo'
      addNewParagraph.appendChild(newParagraph)
   
       }
       addParagraph()
   
       /* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */
   
       const hideFirstUl = function () {
         const hidenList = document.getElementById('firstList')
         hidenList.style = 'display: none'
       }

       hideFirstUl()
   



       /* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */
   
       const paintItGreen = function () {
         const backgroundLi = document.querySelectorAll('ul li')
         backgroundLi.forEach((element) => {
            element.style = 'background-color: green'

         })
         
         
      }
      paintItGreen()
      
   
       /* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */
   
        const makeItClickable = function () {
         let myTitle2 = document.querySelectorAll('.class-title')[0].innerText
         const myTitle3 = myTitle2.split()
         title = myTitle3[0].slice(0, -1)
         
         
         }
      makeItClickable()
      makeItClickable()
      
   
       /* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */
   
       const revealFooterLink = function () {
         const link = document.querySelector('footer a')
         window.alert(link)
        
   
   
       }
       
       /* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
   
       const generateTable = function () {
         const tablePosizion = document.getElementById('tableArea')
         const table = document.createElement('table')
         const tHead = document.createElement('thead')
         const tBody = document.createElement('tbody')

         const th = document.createElement('th')
         const td1 = document.createElement('td')
         const td2 = document.createElement('td')
         const td3 = document.createElement('td')
         const td4 = document.createElement('td')
         
         const tRow1 = document.createElement('tr')
         const tRow2 = document.createElement('tr')
         const tRow3 = document.createElement('tr')
         const tRow4 = document.createElement('tr')
         

         table.appendChild(tHead)
         table.appendChild(tBody)

         tBody.appendChild(tRow1)
         tBody.appendChild(tRow2)
         tBody.appendChild(tRow3)
         tBody.appendChild(tRow4)

         tRow1.appendChild(td1)
         td1.innerText = 'Immagine'
         tRow1.appendChild(td1)
         
         tRow2.appendChild(td2)
         td2.innerText = 'Nome prodotto'
         tRow2.appendChild(td2)

         tRow3.appendChild(td3)
         td3.innerText = 'quantità'
         tRow3.appendChild(td3)

         tRow4.appendChild(td4)
         td4.innerText = 'Prezzo'
         tRow4.appendChild(td4)

         

         tablePosizion.appendChild(table)
         
   
       }
       generateTable()
       /* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
   
       const addRow = function () {
         const table = document.querySelector('table tbody')
         const row = document.createElement('tr')
         const td = document.createElement('td')
         


         table.appendChild(row)
         row.appendChild(td)
         td.innerText = 'PrezzoX'
         row.appendChild(td)
   
       }
       addRow()
       /* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
   
       const hideAllImages = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */
   
       const changeColorWithRandom = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */
   
       const deleteVowels = function () {
   
   
       }