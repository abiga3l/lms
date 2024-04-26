document.addEventListener(
    "DOMContentLoaded",function(){
        const leaderboardBody =document.getElementById("leaderboardBody");
        const players=[
            {name:"Tommy Donald",progress:100},
            {name:"Lowkey Thor",progress:95},
            {name:"Angel Jolly",progress:80},
            {name:"Sandra Muriuki",progress:75},
            {name:"Ben Khalid",progress:60},
        ];
        players.sort((a,b)=>b.progress - a.progress);
        function getVirtualPrize(rank){
            if(rank ===1)return"Gold";
            if(rank ===2)return"Silver";
            if(rank ===3)return"Bronze";
            return "Participation Prize";
        }
        players.forEach((player, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.progress}</td>
                <td class="Virtual-prize-${getVirtualPrize(index + 1)}">${getVirtualPrize(index + 1)}</td>
            `;
        
            leaderboardBody .appendChild(row);
        });
    });