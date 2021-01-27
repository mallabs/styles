fetch('https://extreme-ip-lookup.com/json/')
.then( res => res.json())
.then(response => {
  if (json.countryCode == 'MD') {
    alert('md!!!')
  }
 })
 .catch((data, status) => {
    console.log('Request failed');
 })
