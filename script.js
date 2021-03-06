/*array contendo os relatórios. 
atributos:
-num : numero do relatório no koha
-loc : url do relatório
-nome: designação do relatório
-date_dep: define se este relatório depende ou não do intervalo de tempo*/
const relatorios = [
  {num: "II.a", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=120&phase=Run%20this%20report",
  nome: "Novas entradas - monografias adultos",
  date_dep:1},
    {num: "II.b", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=160&phase=Run%20this%20report",
  nome: "Novas entradas - monografias infantil",
  date_dep:1},
      {num: "II.c", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=290&phase=Run%20this%20report",
  nome: "Novas entradas - e-book / documentos sonoros/ documentos audiovisuais / livros antigos / periódicos / CD-ROM / Outros documentos (jogos, videojogos, postais, fotografias, cartazes, documentos cartográfica, música impressa)",
  date_dep:1},
  {num: "II.j", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=291&phase=Run%20this%20report",
  nome: "Número de exemplares por Classe CDU"},
    {num: "II.k", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=292&phase=Run%20this%20report",
  nome: "Número de exemplares por Classe cota"},
      {num: "II.l", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=293&phase=Run%20this%20report",
  nome: "Número de exemplares por Classe cota, Novas entradas",
  date_dep:1},
  {num: "II.m.i", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=162&phase=Run%20this%20report",
  nome: "Número de exemplares por Espaço: Sala de Adultos"},
    {num: "II.m.ii", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=163&phase=Run%20this%20report",
  nome: "Número de exemplares por Espaço: Sala Infantil"},
    {num: "II.m.iii", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=164&phase=Run%20this%20report",
  nome: "Número de exemplares por Espaço: Depósito"},
    {num: "III.a", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=294&phase=Run%20this%20report",
  nome: "Eliminações de fundo documental: Monografias Adultos"},
      {num: "III.b", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=295&phase=Run%20this%20report",
  nome: "Eliminações de fundo documental: Monografias Infantil"},
      {num: "III.c..i", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=308&phase=Run%20this%20report",
  nome: "Eliminações de fundo documental: Todos"},
      {num: "IV.a", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=107&phase=Run%20this%20report",
  nome: "Número total de leitores"},
  {num: "IV.b", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=108&phase=Run%20this%20report",
  nome: "Número de Novos leitores",
  date_dep:1},
  {num: "IV.c", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=296&phase=Run%20this%20report",
  nome: "Número de leitores por sexo",
  date_dep:1},
    {num: "IV.d", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=126&phase=Run%20this%20report",
  nome: "Número de leitores por Nacionalidade"},
    {num: "IV.e", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=127&phase=Run%20this%20report",
  nome: "Número de leitores por Grupo"},
  {num: "IV.f", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=129&phase=Run%20this%20report",
  nome: "Número de leitores por Grupos Etários"},
    {num: "IV.g", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=128&phase=Run+this+report&sql_params=BMTAV",
  nome: "Número de leitores por grau académico"},
    {num: "IV.h", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=121&phase=Run%20this%20report",
  nome: "Número de leitores por Freguesia, referente aos residentes no concelho de Tavira",
  date_dep:1},
    {num: "IV.i", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=130&phase=Run+this+report&sql_params=BMTAV",
  nome: "Número de leitores em atraso"},
    {num: "IV.j", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=134&phase=Run%20this%20report",
  nome: "Número de leitores penalizados",
  date_dep:1},
    {num: "IV.k", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=300&phase=Run%20this%20report",
  nome: "Os 10 leitores com mais requisições",
  date_dep:1},
    {num: "V.a", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=301&phase=Run%20this%20report",
  nome: "Número de Empréstimos",
  date_dep:1},
  {num: "V.b", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=146&phase=Run%20this%20report",
  nome: "Número de Empréstimos por Sexo",
  date_dep:1},
  {num: "V.c", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=147&phase=Run%20this%20report",
  nome: "Número de Empréstimos por Grupo",
  date_dep:1},
  {num: "V.d", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=148&phase=Run%20this%20report",
  nome: "Número de Empréstimos por Cota",
  date_dep:1},
  {num: "V.e", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=151&phase=Run%20this%20report",
  nome: "Os 10 Documentos mais Emprestados na BMTAV",
  date_dep:1},
  {num: "V.f", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=149&phase=Run%20this%20report",
  nome: "O autor mais requisitado",
  date_dep:1},
  {num: "V.g", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=152&phase=Run%20this%20report",
  nome: "Emprestimo inter bibliotecas, por emprestados e recebidos",
  date_dep:1},
   {num: "V.h", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=150&phase=Run%20this%20report",
  nome: "Leitura Presencial",
  date_dep:1},
     {num: "VI.b", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=135&phase=Run%20this%20report",
  nome: "Registo de frequência de leitores por hora (Sala de adultos e juvenil)",
  date_dep:1},
     {num: "VI.c", 
  loc: "http://lkms/administration/history/statistics",
  nome: "Utilização dos computadores (sala de adultos e infantil)"},
   {num: "VI.d", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=136&phase=Run%20this%20report",
  nome: "Utilização de PCs portáteis (computadores pessoais) Sala de adultos e infantil",
  date_dep:1},
   {num: "VI.e", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=137&phase=Run%20this%20report",
  nome: "Estudos / Trabalhos de investigação",
  date_dep:1},
     {num: "VI.f", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=141&phase=Run%20this%20report",
  nome: "Apoio - Informações sobre a biblioteca (sala de adultos e infantil)",
  date_dep:1},
       {num: "VI.g", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=142&phase=Run%20this%20report",
  nome: "Apoio - Informações sobre Tavira (sala de adultos e infantil)",
  date_dep:1},
  {num: "VI.h", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=140&phase=Run%20this%20report",
  nome: "Apoio informática (sala de adultos e infantil)",
  date_dep:1},
  {num: "VI.i", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=143&phase=Run%20this%20report",
  nome: "Apoio - Informações de carácter geral (sala de adultos e infantil)",
  date_dep:1},
  {num: "VI.j", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=139&phase=Run%20this%20report",
  nome: "Apoio - Serviço de referência (sala de adultos e infantil)",
  date_dep:1},
  {num: "VI.k", 
  loc: "https://koha:8443/cgi-bin/koha/reports/guided_reports.pl?reports=138&phase=Run%20this%20report",
  nome: "Apoio às pesquisas bibliográficas (sala de adultos e infantil)",
  date_dep:1},
]

/* função que lista os relatórios
-lê as datas introduzidas
-define o intervalo de tempo (var inter) de execução dos relatórios
-nos relatórios que são dependentes de data, (date_dep==1)
adiciona esse intervalo aos parametros
*/
function report(){
const d1 = document.getElementById("data_1").value;
const d2 = document.getElementById("data_2").value;
var apresentar = [];

 document.getElementById("aqui").innerHTML = ('<h2 ">'+"Relatórios Estatísticos de "+d1+" a "+d2+'</h2>'); 
  
  for(pos_arr = 0 ; pos_arr < relatorios.length ; pos_arr++){
    var inter = "&sql_params=" + d1 + "&sql_params="+ d2;
    var url_x = relatorios[pos_arr].loc;
        url_x = url_x.concat(inter); //novo url contendo os parametros de data para os relatórios dependentes do intervalo de tempo
    
    let rel_condition = relatorios[pos_arr].date_dep==1;
    let rel_with_date = ('<li ">'+relatorios[pos_arr].num+' '+'<a href=' + url_x + ' target=\"blank\">'+ relatorios[pos_arr].nome +'</a>' +'</li>');
    let rel_no_date = ('<li ">'+relatorios[pos_arr].num+' '+'<a href=' + relatorios[pos_arr].loc + ' target=\"blank\">'+ relatorios[pos_arr].nome +'</a>' +'</li>');
   
         rel_condition ? apresentar.push(rel_with_date) : apresentar.push(rel_no_date);
          }
  document.getElementById("lista").innerHTML ='<ul id="report_list">' + apresentar.join(' ') + '<ul>';
  }

function procurar() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("report_list");
  li = ul.getElementsByTagName("li");
  
  for (i=0; i<li.length; i++){
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      
      if (txtValue.toUpperCase().indexOf(filter)>-1){
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
  }
}
