window.addEventListener('DOMContentLoaded',function(){
const burger = document.querySelector('#navbar-burger')
const menu = document.querySelector('#navbar-menu')
const pannel = document.querySelector('#job-pannel')
burger.addEventListener('click',function(){
  burger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
  })

const form = document.forms['search-job']

form.addEventListener('submit',function(e){
  e.preventDefault()
    if (form.elements[2].checked){
      fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=%E2%9C%93&description=${form.elements[0].value}&location=${form.elements[1].value}&full_time=on`)
      .then((resquest) => resquest.json())
      .then(posts =>{
        // console.log(posts)
        renderPannel(posts)
      })
    } else {
      fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=%E2%9C%93&description=${form.elements[0].value}&location=${form.elements[1].value}`)
      .then((resquest) => resquest.json())
      .then(posts =>{
        // console.log(posts)
        
        renderPannel(posts)
        
      })
    }
  })


  function renderPannel(posts) {
    pannel.innerHTML = "";
    console.log(createItem(posts))
      pannel.appendChild(createItem(posts) )
  }
  function createItem(posts) {
    posts.forEach(function(posts){
      const template = document.querySelector('template')
      const h4 = template.content.querySelector('h4 > a')
      const company = template.content.querySelector('.company')
      const fulltime = template.content.querySelector('.fulltime')
      const location = template.content.querySelector('.location')
      h4.textContent = posts.title
      h4.href = posts.url
      company.href = posts.company_url
      company.textContent = posts.company
      fulltime.textContent = posts.type
      location.textContent = posts.location
      window.a = template.content
      console.log
      var result = document.importNode(template.content.children[0], true)
      return result
    })
    
    // const tr = template.content.querySelector('tr')
    // const td = template.content.querySelector('td')

    
    
    // // const meta = template.content.querySelector('.meta')
    
}
})

// company: "Rijksoverheid"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWlJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--292d6b37f20abfa926265805db953f04f10a04d5/Rijksoverheid.jpg"
// company_url: "http://www.werkenvoornederland.nl"
// created_at: "Tue Aug 25 07:09:51 UTC 2020"
// description: "<p><strong>Teamleider Forensische Software Engineering</strong>↵<strong>Ministerie van Justitie en Veiligheid, Nederlands Forensisch Instituut</strong></p>↵<p><strong>Functieomschrijving</strong>↵<em>Het Nederlands Forensisch Instituut in Den Haag voert hoogwaardig forensisch onderzoek uit. Hierbij ontwikkelt de groep 'Forensische Software Engineering’ innovatieve software die van groot belang is voor dat onderzoek. Dankzij deze applicaties en softwarebibliotheken kunnen misdrijven sneller opgelost en de verdachten vervolgd worden. Als geen ander weet jij als resultaatgerichte teamleider jouw team te coachen en te inspireren. Zo kan het team de optimale prestatie neerzetten bij de doorontwikkeling en verbetering van deze applicaties. En dragen het team en jij bij aan een veiliger Nederland voor iedereen.</em></p>↵<p>In jouw rol als teamleider stuur je in een agile-omgeving een team van hoogopgeleide softwareontwikkelaars en testers aan; een hecht team van dertien gedreven softwareontwikkelaars van het Nederlands Forensisch Instituut (NFI), aangevuld met een wisselend aantal externe professionals. Zij zijn gefocust op de hele softwareontwikkelingscyclus, en jouw stijl van leidinggeven stimuleert hen om het beste uit het team en zichzelf te halen. Hierbij ondersteun je het team om de belangen van de operatie, de verwachte hoge kwaliteit en de innovatie tegen elkaar af te wegen.</p>↵<p>Samen met het team vorm je een duidelijke visie op de strategische doelen en hoe deze gerealiseerd kunnen worden. Zelf ben je verantwoordelijk voor de planning, de financiën, ontwikkeling van het team en de teamleden, en de afstemming van de projecten met de interne en externe afnemers. Je organiseert behendig, en toont, wanneer nodig, duidelijk lef om de resultaten en veranderingen te realiseren.</p>↵<p>Je maakt ook deel uit van het managementteam van de divisie, waarin je enkele portefeuilles beheert en samen met de collega’s de strategie vormgeeft. Je treedt verbindend op, zowel binnen de divisie, het NFI, als tussen het NFI en de partners in de keten van de openbare orde en veiligheid.</p>↵<p><strong>Functie-eisen</strong></p>↵<ul>↵<li>Je hebt wo-niveau en bij voorkeur een diploma in de richting van informatica, bedrijfskunde of een vergelijkbare opleiding.</li>↵<li>Je hebt relevante werkervaring met het aansturen en motiveren van hoger opgeleide professionals in een ICT-omgeving en bij voorkeur enkele jaren ervaring in het leiden van een softwareontwikkelteam of vergelijkbaar team.</li>↵<li>Je hebt kennis van en ervaring met één of meerdere agile-softwareontwikkelmethoden (scrum of scrumban).</li>↵<li>Je kunt netwerken opbouwen en onderhouden.</li>↵<li>Je weet met oog voor mensen goede resultaten te behalen.</li>↵<li>Je kunt leiderschapsstijl naar omstandigheden aanpassen.</li>↵</ul>↵<p><strong>Competenties</strong></p>↵<ul>↵<li>Analyseren</li>↵<li>Netwerken</li>↵<li>Omgevingsbewustzijn</li>↵<li>Overtuigingskracht</li>↵<li>Plannen en organiseren</li>↵<li>Samenwerken</li>↵</ul>↵<p><strong>Wat vinden wij nog meer belangrijk</strong>↵De teamleden verwachten van jou een collegiale, stimulerende en communicatieve teamleider die fungeert als toegankelijk aanspreekpunt voor het hele team. Je kunt goed omgaan met de platte structuur van het team en hebt gevoel voor de forensische context waarbinnen het team werkt. Je hebt enig technisch begrip en begrijpt wat de toepassingen zijn van de technische complexe toepassingen die wij maken. We doen het samen en je bent als teamleider dan ook echt onderdeel van ons team!</p>↵<p><strong>Arbeidsvoorwaarden</strong>↵<strong>Salarisniveau:</strong> schaal 12, schaal 13↵<strong>Salarisomschrijving:</strong> Op deze functie is het Functiegebouw Rijk van toepassing. Inschaling vindt plaats op basis van je opleiding en ervaring. De mogelijkheid bestaat dat je in beginsel via een aanvangsschaal wordt aangesteld. Deze kan één schaal lager zijn dan de betreffende functieschaal.↵<strong>Maandsalaris:</strong> Min €3.815 – Max. €6.374 (bruto)↵<strong>Dienstverband:</strong> Arbeidsovereenkomst voor bepaalde tijd met uitzicht op onbepaalde tijd↵<strong>Contractduur:</strong> Tijdelijke aanstelling / Arbeidsovereenkomst voor bepaalde tijd met uitzicht op onbepaalde tijd↵<strong>Minimaal aantal uren per week:</strong> 32↵<strong>Maximaal aantal uren per week:</strong> 36</p>↵<p><strong>Overige arbeidsvoorwaarden</strong>↵Naast het salaris ontvang je een individueel keuzebudget (IKB). Het IKB bestaat uit geld (16,37% van je brutojaarsalaris) en tijd. Met het IKB maak jij de keuzes die bij jou passen en kun je een deel van je arbeidsvoorwaarden zelf samenstellen. Je kunt er bijvoorbeeld voor kiezen om een deel van je maandinkomen te laten uitbetalen wanneer jij dat wenst. Ook kun je dit budget omzetten in verlof en andersom of besteden aan fiscaalvriendelijke doelen. De Rijksoverheid hecht sterk aan persoonlijke groei en loopbaanontwikkeling en biedt daarvoor tal van mogelijkheden. Tot de secundaire arbeidsvoorwaarden behoren onder meer verschillende studiefaciliteiten, bedrijfsfitness, volledige vergoeding van je ov-reiskosten woon-werkverkeer en gedeeltelijk betaald ouderschapsverlof.</p>↵<ul>↵<li>Solliciteren? Nadat je via de sollicitatiebutton hebt gereageerd kun je jouw motivatie en cv als Word- of pdf-bestand uploaden. We nodigen je graag uit om in je motivatiebrief ook iets over jezelf te vertellen.</li>↵<li>Het toetsen van de integriteit van onze nieuwe collega’s is voor het Nederlands Forensisch Instituut van groot belang. Voor deze functie geldt dat er een veiligheid B-onderzoek moet worden opgestart bij de Algemene Inlichtingen- en Veiligheidsdienst. Ook een geheimhoudingsverklaring maakt deel uit van het sollicitatieproces.</li>↵<li>Wanneer je als rijksambtenaar een beroep doet op een voorrangspositie, stuur dan ook een kopie van je beschikking mee.</li>↵<li>Een assessment (psychologische en vaardigheidstest) maakt deel uit van het sollicitatieproces, net als het opvragen van referenties en het inzetten van een (online) screening.</li>↵<li>Acquisitie naar aanleiding van deze vacature wordt niet op prijs gesteld.</li>↵<li>Aan deze vacaturetekst kunnen geen rechten worden ontleend.</li>↵<li>De maatregelen rondom de coronacrisis hebben ook invloed op de sollicitatieprocedure die hierdoor kan vertragen. Waar mogelijk zullen wij voor de sollicitatiegesprekken alternatieve vormen bieden.</li>↵</ul>↵"
// how_to_apply: "<p>Het Rijk hecht waarde aan een diverse en inclusieve organisatie. Werken in divers samengestelde teams maakt ons effectiever, innovatiever en het werk leuker. Eenieder wordt daarom uitgenodigd te <a href="http://www.werkenvoornederland.nl/vacatures/teamleider-forensische-software-engineering-NFI-2020-0024?utm_source=github&amp;utm_medium=jobboard&amp;utm_campaign=&amp;utm_term=nfi200024&amp;utm_content=574">solliciteren</a>.</p>↵"
// id: "de97fddd-2bc9-4d89-b3eb-3976f9870c72"
// location: "Den Haag"
// title: "Teamleider Forensische Software Engineering"
// type: "Full Time"
// url: "https://jobs.github.com/positions/de97fddd-2bc9-4d89-b3eb-3976f9870c72"
