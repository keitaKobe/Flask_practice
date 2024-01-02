let currentChoice = '';

function openModal(choice) {
    currentChoice = choice;
    document.getElementById('team-modal').style.display = 'block';
// チームのリストをモーダルに表示するロジックをここに追加
}

function closeModal() {
    document.getElementById('team-modal').style.display = 'none';
}

function selectTeam(teamName) {
    var elem = document.getElementById(currentChoice + '-choice');

    switch(teamName){
        case 0:
            elem.src = "/static/images/emblem/Arsenal.png";
            break;
        case 1:
            elem.src = "/static/images/emblem/AstonVilla.png";
            break;
        case 2:
            elem.src = "/static/images/emblem/Bournemouth.png";
            break;
        case 3:
            elem.src = "/static/images/emblem/Brentford.png";
            break;
        case 4:
            elem.src = "/static/images/emblem/Brighton.png";
            break;
        case 5:
            elem.src = "/static/images/emblem/Burnley.png";
            break;        
        case 6:
            elem.src = "/static/images/emblem/Chelsea.png";
            break;        
        case 7:
            elem.src = "/static/images/emblem/Crystal.png";
            break;
        case 8:
            elem.src = "/static/images/emblem/Everton.png";
            break;        
        case 9:
            elem.src = "/static/images/emblem/Fulham.png";
            break; 
        case 10:
            elem.src = "/static/images/emblem/Liverpool.png";
            break;        
        case 11:
            elem.src = "/static/images/emblem/Luton.png";
            break;
        case 12:
            elem.src = "/static/images/emblem/ManCity.png";
            break;     
        case 13:
            elem.src = "/static/images/emblem/ManUnited.png";
            break;  
        case 14:
            elem.src = "/static/images/emblem/Newcastle.png";
            break;        
        case 15:
            elem.src = "/static/images/emblem/NotForest.png";
            break;
        case 16:
            elem.src = "/static/images/emblem/Sheffield.png";
            break;        
        case 17:
            elem.src = "/static/images/emblem/Tottenham.png";
            break;        
        case 18:
            elem.src = "/static/images/emblem/WestHam.png";
            break;        
        case 19:
            elem.src = "/static/images/emblem/Wolves.png";
            break;       
                    
            
    }

    closeModal();
}

// チーム選択用のロジックも追加する必要があります。
// たとえば、モーダル内のチームアイコンがクリックされた時、そのチーム名を selectTeam に渡すなど。
