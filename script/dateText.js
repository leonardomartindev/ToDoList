function getFormattedDate() {
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
  
    return `${dayOfWeek}, ${dayOfMonth} de ${month}`;
  }
  getFormattedDate()
  
  const spanDate = document.getElementsByClassName("data");
  for (let i = 0; i < spanDate.length; i++) {
    spanDate[i].innerHTML = getFormattedDate();
  }