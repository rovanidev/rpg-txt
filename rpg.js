const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const player = {
    nome: '',
    classe: '',
    hp: 100,
    armadura: '',
    maxHp: 100,
    força: 0,
    mana: 0,
    maxMana: 80,
    ouro: 5000,
    arma: '',
    mochila: []
}

function iniciar() {
    console.log('\n---Bem vindo Aventureiro! Hora de criar o seu personagem:---')
    readline.question('Nome do personagem: ', nome => {
        player.nome = nome
        console.log('Escolha uma classe:')
        console.log('-1 Guerreiro\n-2 Mago')
        readline.question('', opção => {
            switch (opção) {
                case '1': player.classe = 'Guerreiro'; break

                case '2': player.classe = 'Mago'; break
                default:
                    console.log('Opção inválida!')
                    iniciar()
                    return
            }

            if (player.classe === 'Guerreiro') {
                player.arma = 'Espada de madeira'
                player.força = 15
            } else {
                player.arma = 'Varinha de madeira'
                player.mana = 80
                player.força = 8
                player.mochila.push({
                    nome: 'Poção de Mana'
                })
            }

            Cidade()
        })

    })
}

function Cidade() {
    console.log(`\n---Bem vindo(a) à cidade de Dialém ${player.classe} ${player.nome}}!---`)
    console.log(`1 - Ir até o Botequim!`)
    console.log(`2 - Ir até o Ferreiro!`)
    console.log(`3 - Partir para uma aventura!`)
    console.log(`4 - Status do(a) personagem!`)
    console.log(`5 - Sair do jogo...`)

    readline.question(`Escolha uma opção:`, opção => {
        switch (opção) {
            case '1': Botequim(); break
            case '2': Ferreiro(); break
            case '3': Aventura(); break
            case '4': Status(); break
            case '5': Sair(); break
            default:
                console.log('Opção inválida!')
                Cidade()


        }
    })

}

//---------------BOTEQUIM---------------

function Botequim() {
    console.log(`\n---No Botequim você pode beber para recuperar o seu HP e MANA!---`)

    console.log('1 - Ambravida')
    console.log('2 - Manaflux')
    console.log('3 - Apostar')
    console.log('4 - Sair do Botequim')

    readline.question('Escolha a sua bebida:', bebida => {
        switch (bebida) {
            case '1': Ambravida(); break
            case '2': Manaflux(); break
            case '3': Apostar(); break
            case '4':
                console.log('Saindo do Botequim...')
                Cidade(); break

            default:
                console.log('Opção inválida!')
                Botequim()
        }
    })
}

Ambravida = () => {
    player.hp = player.maxHp
    console.log('Você recuperou toda a sua Vida!')
    Botequim()
}

Manaflux = () => {
    if (player.classe === 'Mago') {
        player.mana = player.maxMana
        console.log('Você recuperou toda a sua Mana!')
        Botequim()
    } else {
        console.log('Você não pode consumir mana se não for um Mago')
        Botequim()
    }
}

Apostar = () => {
    const dadoArte = `
................:=+***##+...............
..........-=+*#####*-:::-**-............
....:=*#*+++*#########**#***#+:.........
..:*####+-:::-##########*-::::##:.......
..-########**#***#########****####+.....
..*##########=-:::-##########*-:::-**:..
.:#+=+*#########**#***#########*++*####=
.=#*:-=###########=::::=##############%#
.*###+*############*+++*########%%%%%%%=
:##########################%%%%%%%%#*##:
=############*+*######%%%%%%%%%%%#***%+.
*######**####=-=+#%%%%%%%%%%%%%%%%#%%%..
#######==+*###=:=#%%%%%%%%%%%%%%%%%%%+..
#==+###+:-+######%%%%%%%%%%%%#%%%%%%%:..
#+:-+############%%%%%%%%%%#**%%%%%%*...
:##*############%%%%%%%%%%#**%%%%%%%:..:
..:*############%%%%%%%%%%%%%%%%%%%+....
....:*#####+*###%%%%%%%%%%%%%%%%%%%:....
.......*##*-==#%%%%%%#*%%%%%%%%%%%-....:
.........+#*--#%%%%#***%%%%%%+-.........
:..........+##%%%%%##%%#*=..............
.............=#%%%%*-.................:=`

    console.log('\n---Acerte o dado: 10 Ouros---')
    console.log(`Você possui ${player.ouro} ouros.`)
    console.log(dadoArte)
    console.log('Digite um número entre 1 e 6 para apostar ou 7 para sair:')

    const DadoAleatorio = Math.ceil(Math.random() * 6)

    readline.question('', opcao => {
        switch (opcao) {
            case '1':
                if (player.ouro >= 10) {
                    player.ouro -= 10
                    console.log(`${player.ouro} - 10`)
                } else {
                    console.log('Veio apostar sem ao menos possuir ouro?')
                    Botequim()
                    return
                }
                if (DadoAleatorio === 1) {
                    console.log('Como você previu?')
                    player.ouro += 50
                    console.log(`+50. Seus ouros: ${player.ouro}`)

                } else {
                    console.log('Não foi dessa vez...')
                }
                Botequim()
                break

            case '2':
                if (player.ouro >= 10) {
                    player.ouro -= 10
                    console.log(`${player.ouro} - 10`)
                } else {
                    console.log('Veio apostar sem ao menos possuir ouro?')
                    Botequim()
                    return
                }
                if (DadoAleatorio === 2) {
                    console.log('Você tem muita sorte!')
                    player.ouro += 50
                    console.log(`+50. Seus ouros: ${player.ouro}`)
                } else {
                    console.log('Tá com azar em...')
                }
                Botequim()
                break

            case '3':
                if (player.ouro >= 10) {
                    player.ouro -= 10
                    console.log(`${player.ouro} - 10`)
                } else {
                    console.log('Veio apostar sem ao menos possuir ouro?')
                    Botequim()
                    return
                }
                if (DadoAleatorio === 3) {
                    console.log('Minha nossa senhora!')
                    player.ouro += 50
                    console.log(`+50. Seus ouros: ${player.ouro}`)
                } else {
                    console.log('Não acha melhor para por hoje?')
                }
                Botequim()
                break

            case '4':
                if (player.ouro >= 10) {
                    player.ouro -= 10
                    console.log(`${player.ouro} - 10`)
                } else {
                    console.log('Veio apostar sem ao menos possuir ouro?')
                    Botequim()
                    return
                }
                if (DadoAleatorio === 4) {
                    console.log('Você é iluminado!')
                    player.ouro += 50
                    console.log(`+50. Seus ouros: ${player.ouro}`)
                } else {
                    console.log('A sorte não está ao seu lado...')
                }
                Botequim()
                break

            case '5':
                if (player.ouro >= 10) {
                    player.ouro -= 10
                    console.log(`${player.ouro} - 10`)
                } else {
                    console.log('Veio apostar sem ao menos possuir ouro?')
                    Botequim()
                    return
                }
                if (DadoAleatorio === 5) {
                    console.log('5 Deve ser o seu número da sorte né!')
                    player.ouro += 50
                    console.log(`+50. Seus ouros: ${player.ouro}`)
                } else {
                    console.log('Da próxima vez... Esquece, melhor não ter próxima')
                }
                Botequim()
                break

            case '6':
                if (player.ouro >= 10) {
                    player.ouro -= 10
                    console.log(`${player.ouro} - 10`)
                } else {
                    console.log('Veio apostar sem ao menos possuir ouro?')
                    Botequim()
                    return
                }
                if (DadoAleatorio === 6) {
                    console.log('Ja para para curtir a 6 ta feira agora em!')
                    player.ouro += 50
                    console.log(`+50. Seus ouros: ${player.ouro}`)
                } else {
                    console.log('O 6 não te quis...')
                }
                Botequim()
                break

            case '7': Botequim(); break

            default:
                console.log('Opção inválida')
                Botequim()
        }


    })


}

//---------------FERREIRO---------------

function Ferreiro() {
    console.log(`\n---No Ferreiro você pode comprar novas armas!---`)
    console.log(`Você possui ${player.ouro} ouros.`)

    console.log(`1 - Espada de Ferro -> 10 Ouros`)
    console.log(`2 - Espada Encantada -> 30 Ouros`)
    console.log(`3 - Varinha de Ferro -> 10 Ouros`)
    console.log(`4 - Sair do Ferreiro`)

    readline.question('O que deseja comprar?', opção => {
        if (opção === '1') {
            if (player.ouro >= 10 && player.classe === 'Guerreiro') {
                player.ouro -= 10
                player.arma = 'Espada de Ferro'
                console.log(`${player.nome}, aproveite sua nova Espada de Ferro`)
                Ferreiro()
            } else {
                if (player.classe !== 'Guerreiro') {
                    console.log('Mago na linha de frente agora?')
                    Ferreiro()
                }

                if (player.ouro < 10) {
                    console.log('Você não possui ouro o suficiente')
                    Ferreiro()
                }
            }
        }
        if (opção === '2') {
            if (player.ouro >= 30) {
                player.ouro -= 30
                player.arma = 'Espada Encantada'
                console.log(`${player.nome}, aproveite sua nova Espada Encantada`)
                Ferreiro()
            } else {
                if (player.classe !== 'Guerreiro') {
                    console.log('Mago na linha de frente agora?')
                    Ferreiro()
                }

                if (player.ouro < 10) {
                    console.log('Você não possui ouro o suficiente')
                    Ferreiro()
                }
            }
        }

        if (opção === '3') {
            if (player.ouro >= 12 && player.classe === 'Mago') {
                player.ouro -= 12
                player.arma = 'Varinha de Ferro'
                console.log(`${player.nome}, aproveite sua nova Varinha de Ferro`)
                Ferreiro()
            } else {

                if (player.classe !== 'Mago') {
                    console.log('Por que um Guerreiro desejaria ter uma varinha?')
                    Ferreiro()
                }

                if (player.ouro < 12) {
                    console.log('Você não possui ouro o suficiente')
                    Ferreiro()
                }
            }


        }

        if (opção === '4') {
            console.log('Saindo do Ferreiro...')
            Cidade()
        }
    })

}

EspadaDeFerro = () => {
    console.log(`Impressionante ${nome}, você está evoluindo rápido!`)
    player.arma = 'Espada de Ferro'
    console.log(`Aproveite sua nova Espada de Ferro!`)
    cidade()
}

EspadaEncantada = () => {
    console.log(`Meu Deus ${nome}, você é incrível! Anda matando muitos monstros por aí?`)
    player.arma = 'Espada Encantada'
    console.log(`Aproveite sua nova Espada Encantada!`)
    cidade()
}

//---------------AVENTURA---------------

function Aventura() {
    console.log('\n---Por onde deseja se aventurar?---')
    console.log('1 - Eldravar')
    console.log('2 - Velmorim')
    console.log('3 - Ir à Caça')
    console.log('4 - Voltar')
    readline.question('', opção => {
        switch (opção) {
            case '1':
                Eldravar()
                break;
            case '2':
                Velmorin()
                break;
            case '3':
                ProcurarMonstros()
                break;
            case '4':
                Cidade()
                break;


            default:
                break;
        }
    })


    ProcurarMonstros = () => {
        //Goblin 

        console.log('Você partiu em uma aventura!')
        if (Math.random() > 0.7) {
            const goblimArte = `                                                   
                                ...                
           ..:=*#######*+-...  .+@%:               
        ..=%%#+==-------=+*%%+:-%-+#.              
      ..+%*================-=+%@#::%=.             
     .=%*=-===========+=======+#:::+#.   .=+.      
    .-%+-=============+*=====*#-:::=%%=.:*#%+      
    .#*:==========+****#+===+%-::::+*=#%%+:#+      
   .:%=-==========+######+===+%*=+##===+#::%=      
   .##-===++++=====*####*===============**-%-      
  :#%=-=+%+++++#%+==+*+==================###.      
 .##=:===+%++*#+=+##+=====================@=.      
 :%=-======#*+*#%#==*%+=====+****#**+====-+#.      
.-%=========%+#%@@@*==#*======++*#=%%#+===:%*.     
 :%=========#*####%@=============*-.:@#*==:*#.     
 :%=========*#*####%==============##:+%#+-+@*..    
 .#*========+%=+####=================+=====:#%:.   
  +%==========%*+#%*========================-+@=.  
  =%===========#@#*%%+===============**%#=====-%+. 
 .*#===========***%=======+=..++===+#@*=======-#*. 
:#%-===========+**%======++.....++=+#%#+=======*#. 
%*:============*#*%======*-......:*++###@@#+===*%: 
+:=========+==*###%-====*--:.:=-...**#%#:.:+%%+##. 
-=========+==*#####-====+..==:..:=:.#%=.    .:==.. 
==========+=*######-===+-.........:*%-.            
%========+=+######%+:===++++++===:+%:.             
=@#+=====+=*#####@##%=-===========%=               
.:*%%+++++*###%%*-..+%#=-========+#.               
  ..=*%%#####@*:.   .:+%#========*#.               
     ..:-*%%*..       ..=%%+=====#*.               
          ..             .-#%*===%+.               
                           ..=#%%#:                
                               ...            `

            console.log(goblimArte)

            Batalha('Goblim', 25)

        } else if (Math.random() < 0.2) {
            const orcArt = `
}           _......._
       .-'.'.'.'.'.'.\`-.
     .'.'.'.'.'.'.'.'.'.\`.
    /.'.'               '.\\
    |.'    _.--...--._     |
    \\    \`._.-.....-._.'   /
    |     _..- .-. -.._   |
 .-.'    \`.   ((@))  .'   '.-.
( ^ \\      \`--.   .-'     / ^ )
 \\  /         .   .       \\  /
 /          .'     '.  .-    \\
( _.\\    \\ (_\`-._.-'_)    /._\\)
 \`-' \\   ' .--.          / \`-'
     |  / /|_| \`-._.'\\   |
     |   |       |_| |   /-.._
 _..-\\   \`.--.______.'  |
      \\       .....     |
       \`.  .'      \`.  /
         \\           .'
          \`-..___..-\`
`;
            console.log(orcArt);

            Batalha('Orc', 65)

        } else if (Math.random() < 0.1) {
            const dragoArt = `
          /                            )
          (                             |\\
         /|                              \\\\
        //                                \\\\
       ///                                 \\|
      /( \\                                  )\\
      \\\\  \\_                               //)
       \\\\  :\\__                           ///
        \\\\     )                         // \\
         \\\\:  /                         // |/
          \\\\ / \\                       //  \\
           /)   \\   ___..-'           (|  \\_|
          //     /   _.'              \\ \\  \\
         /|       \\ \\________          \\ | /
        (| _ _  __/          '-.       ) /.'
         \\\\ .  '-.__            \\_    / / \\
          \\\\_'.     > --._ '.     \\  / / /
           \\ \\      \\     \\  \\     .' /.'
            \\ \\  '._ /     \\ )    / .' |
             \\ \\_     \\_   |    .'_/ __/
              \\  \\      \\_ |   / /  _/ \\_
               \\  \\       / _.' /  /     \\
               \\   |     /.'   / .'       '-,_
                \\   \\  .'   _.'_/             \\
   /\\    /\\      ) ___(    /_.'           \\    |
  | _\\__// \\    (.'      _/               |    |
  \\/_  __  /--'\\\`    ,                   __/    /
  (_ ) /b)  \\  '.   :            \\___.-'_/ \\__/
  /:/:  ,     ) :        (      /_.'__/-'|_ _ /
 /:/: __/\\ >  __,_.----.__\\    /        (/(/(/
/(_(,_/V .'/--'    _/  __/ |   /
 VvvV  //\`    _.-' _.'     \\   \\
   n_n//     (((/->/        |   /
   '--'         ~='          \\  |
                              | |_,,,
                 snd          \\  \\  /
                               '.__)
`;

            console.log(dragoArt);
            Batalha('Dragao Ancestral', 150)

        } else {
            console.log('A aventura foi tranquila, não encontrou nenhum monstro pelo caminho!')
            Cidade()
        }
    }
}

Status = () => {
    console.log(`\n---Status de ${player.nome}---`)
    console.log(`Classe:${player.classe}`)
    console.log(`Hp: ${player.hp}/${player.maxHp}`)
    console.log(`Armadura: ${player.armadura}`)
    console.log(`Força:${player.força}`)
    console.log(`Arma:${player.arma}`)
    console.log(`Mana: ${player.mana}/${player.maxMana}`)
    console.log(`Ouro:${player.ouro}`)
    console.log('Mochila:', player.mochila.map(item => item.nome).join(', '))
    console.log('1 - Sair')

    readline.question('', opcao => {
        switch (opcao) {
            case '1': Cidade(); break
        }
    })
}

Sair = () => {
    console.log('Obrigado por jogar, até a próxima aventura...')
    readline.close()
}

//APENAS ELDRAVAR

function Eldravar() {
    console.log(`\n---Bem vindo(a) à cidade de Eldravar ${player.classe} ${player.nome}!---`)
    console.log(`1 - Ir até o Covil da Bruxa!`)
    console.log(`2 - Ir até a Loja de Armaduras!`)
    console.log(`3 - Partir para uma aventura!`)
    console.log(`4 - Status do(a) personagem!`)
    console.log(`5 - Sair do jogo...`)

    readline.question(`Escolha uma opção:`, opção => {
        switch (opção) {
            case '1': Covil(); break
            case '2': LojaDeArmaduras(); break
            case '3': Aventura(); break
            case '4': Status(); break
            case '5': Sair(); break
            default:
                console.log('Opção inválida!')
                Eldravar()


        }
    })
}

function Covil() {
    console.log(`\n---Não beba o Elixir da Bruxa ao menos que esteja preparado para um desafio muito maior---`)

    console.log('1 - Elixir da Bruxa')
    console.log('2 - Sair do Covil')

    readline.question('Escolha a sua bebida:', bebida => {
        switch (bebida) {
            case '1': ElixirDaBruxa(); break
            case '2':
                console.log('Saindo do Covil...')
                Eldravar(); break

            default:
                console.log('Opção inválida!')
                Covil()
        }
    })
}

let ElixirDaBruxa = () => {
    console.log('A voz da Bruxa ecoa: "Abra o baú e me ache o meu livro antes que seja tarde.."')

    let chaveCerta = Math.ceil(Math.random() * 7);

    function acharChave() {

        console.log('Tem 7 chaves e apenas uma abrirá o Baú. Escolha uma chave de 1 a 7:')

        readline.question('', opcao => {

            let escolha = parseInt(opcao)

            if (escolha === chaveCerta) {
                console.log('Você encontrou o meu livro, está livre agora')
                Eldravar()
            } else if (escolha === chaveCerta) {
                console.log('Você encontrou o meu livro, está livre agora')
                Eldravar()
            } else if (escolha === chaveCerta) {
                console.log('Você encontrou o meu livro, está livre agora')
                Eldravar()
            } else if (escolha === chaveCerta) {
                console.log('Você encontrou o meu livro, está livre agora')
                Eldravar()
            } else if (escolha === chaveCerta) {
                console.log('Você encontrou o meu livro, está livre agora')
                Eldravar()
            } else if (escolha === chaveCerta) {
                console.log('Você encontrou o meu livro, está livre agora')
                Eldravar()
            } else if (escolha === chaveCerta) {
                console.log('Você encontrou o meu livro, está livre agora')
                Eldravar()
            } else {
                console.log('Seu tempo está acabando...')
                acharChave()
            }

        })
    }

    acharChave()

}

function LojaDeArmaduras() {
    console.log(`\n---Loja de Armaduras!---`)
    console.log(`Você possui ${player.ouro} ouros.`)

    console.log(`1 - Couraça Sombria -> 55 Ouros`)
    console.log(`2 - Peitoral do Vento -> 60 Ouros`)
    console.log(`3 - Pele de Orc -> 60 Ouros`)
    console.log(`4 - Passos Silenciosos -> 65 Ouros`)
    console.log(`5 - Placas do Guerreiro -> 65 Ouros`)
    console.log(`6 - Véu da Sombra -> 70 Ouros`)
    console.log(`7 - Veloz da Caçada -> 70 Ouros`)
    console.log(`8 - Guardião das Trevas -> 75 Ouros`)
    console.log(`9 - Aço de Batalha -> 80 Ouros`)
    console.log(`10 - Ferro da Montanha -> 85 Ouros`)
    console.log(`11 - Orc Ancestral -> 90 Ouros`)
    console.log(`12 - Chifre da Besta -> 95 Ouros`)
    console.log(`13 - Escudo da Fortaleza -> 100 Ouros`)
    console.log(`14 - Casco de Dragão -> 150 Ouros`)
    console.log(`15 - Escamas Ardentes -> 180 Ouros`)
    console.log(`16 - Casca Obscura -> 200 Ouros`)
    console.log(`17 - Escudo do Dragão -> 210 Ouros`)
    console.log(`18 - Fúria do Dragão -> 230 Ouros`)
    console.log(`19 - Garras Ardentes -> 240 Ouros`)
    console.log(`20 - Coração da Noite -> 250 Ouros`)
    console.log(`21 - Sair do Ferreiro`)

    readline.question('O que deseja comprar?', opção => {
        if (opção === '1') {
            if (player.ouro >= 55) {
                player.ouro -= 55
                player.armadura = 'Armadura Couraça Sombria'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '2') {
            if (player.ouro >= 60) {
                player.ouro -= 60
                player.armadura = 'Armadura Peitoral do Vento'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '3') {
            if (player.ouro >= 60) {
                player.ouro -= 60
                player.armadura = 'Armadura Pele de Orc'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '4') {
            if (player.ouro >= 65) {
                player.ouro -= 65
                player.armadura = 'Armadura Passos Silenciosos'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '5') {
            if (player.ouro >= 65) {
                player.ouro -= 65
                player.armadura = 'Armadura Placas do Guerreiro'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '6') {
            if (player.ouro >= 70) {
                player.ouro -= 70
                player.armadura = 'Armadura Véu da Sombra'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '7') {
            if (player.ouro >= 70) {
                player.ouro -= 70
                player.armadura = 'Armadura Veloz da Caçada'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '8') {
            if (player.ouro >= 75) {
                player.ouro -= 75
                player.armadura = 'Armadura Guardião das Trevas'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '9') {
            if (player.ouro >= 80) {
                player.ouro -= 80
                player.armadura = 'Armadura Aço de Batalha'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '10') {
            if (player.ouro >= 85) {
                player.ouro -= 85
                player.armadura = 'Armadura Ferro da Montanha'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '11') {
            if (player.ouro >= 90) {
                player.ouro -= 90
                player.armadura = 'Armadura Orc Ancestral'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '12') {
            if (player.ouro >= 95) {
                player.ouro -= 95
                player.armadura = 'Armadura Chifre da Besta'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '13') {
            if (player.ouro >= 100) {
                player.ouro -= 100
                player.armadura = 'Armadura Escudo da Fortaleza'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '14') {
            if (player.ouro >= 150) {
                player.ouro -= 150
                player.armadura = 'Armadura Casco de Dragão'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '15') {
            if (player.ouro >= 180) {
                player.ouro -= 180
                player.armadura = 'Armadura Escamas Ardentes'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '16') {
            if (player.ouro >= 200) {
                player.ouro -= 200
                player.armadura = 'Armadura Asa Flamejante'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '17') {
            if (player.ouro >= 210) {
                player.ouro -= 210
                player.armadura = 'Armadura Escudo do Dragão'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '18') {
            if (player.ouro >= 230) {
                player.ouro -= 230
                player.armadura = 'Armadura Fúria do Dragão'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '19') {
            if (player.ouro >= 240) {
                player.ouro -= 240
                player.armadura = 'Armadura Garras Ardentes'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '20') {
            if (player.ouro >= 250) {
                player.ouro -= 250
                player.armadura = 'Armadura Coração da Noite'
                player.hp += armaduras[player.armadura] || 0
                console.log(`${player.nome}, aproveite sua nova Armadura! Defesa adicionada: ${armaduras[player.armadura]}`)
                LojaDeArmaduras()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDeArmaduras()
            }
        }

        else if (opção === '21') {
            console.log('Saindo da Loja...')
            Eldravar()
        }

        else {
            console.log('Opção inválida, tente novamente.')
            LojaDeArmaduras()
        }
    })
}


function Velmorin() {
    console.log(`\n---Bem vindo(a) à cidade de Velmorim ${player.classe} ${player.nome}!---`)
    console.log(`1 - Ir até a Feira Central!`)
    console.log(`2 - Ir até a Loja de Poções!`)
    console.log(`3 - Partir para uma aventura!`)
    console.log(`4 - Status do(a) personagem!`)
    console.log(`5 - Sair do jogo...`)

    readline.question(`Escolha uma opção:`, opção => {
        switch (opção) {
            case '1': FeiraCentral(); break
            case '2': LojaDePocoes(); break
            case '3': Aventura(); break
            case '4': Status(); break
            case '5': Sair(); break
            default:
                console.log('Opção inválida!')
                Eldravar()


        }
    })
}

function FeiraCentral() {
    console.log(`\n---Feira Central---`)

    console.log('1 - Falar com Tio Garlon (Dono da Feira)')
    console.log('2 - Sair do Botequim')

    readline.question('Escolha:', opcao => {
        switch (opcao) {
            case '1': TioGarlon(); break
            case '2':
                console.log('Saindo da Feira...')
                Velmorin(); break

            default:
                console.log('Opção inválida!')
                FeiraCentral()
        }
    })
}

function TioGarlon() {
    console.log('\nVocê se aproxima de Tio Garlon, o dono da Feira Central.')
    console.log('"Ah, garoto! Você parece ter um bom par de pernas! Tenho uma coisinha pra você..."')
    console.log('"Um dos entregadores da feira sumiu e deixou um saco de maçãs pra entregar na Casa da Madame Lurella."')
    console.log('Você aceita entregar o saco de maçãs?')
    console.log('1 - Aceitar a entrega')
    console.log('2 - Recusar educadamente')

    readline.question('Escolha: ', opcao => {
        switch (opcao) {
            case '1':
                console.log('\n"Ótimo! Ela mora ali depois da fonte, não tem erro. E cuidado com o gato da feira, o bicho é do capeta! Rouba todas as maçãs"')
                Entrega()
                break
            case '2':
                console.log('\n"Bah, molecada de hoje em dia... tudo com preguiça!"')
                FeiraCentral()
                break

        }
    })
}

function Entrega() {
    console.log(`\n Partindo para a entrega`)
    console.log(`1 - Ir pelo centro`)
    console.log(`2 - Ir pela estrada deserta`)
    readline.question(`Escolha:`, opcao => {
        switch (opcao) {
            case '1':
                if (Math.random() < 0.5) {
                    console.log('O gato esta no centro e roubou suas maçãs')
                    console.log(`\nTio Garlon: "Eu avisei para tomar cuidado com o Gato!"`)
                    FeiraCentral()
                } else {
                    console.log('Obrigado pelo favor jovem, pegue...')
                    player.ouro += 10
                    console.log(`Ouro:${player.ouro} + 10`)
                }
                break

            case '2':
                if (Math.random() > 0.5) {
                    console.log('O gato estava na estrada e roubou suas maçãs')
                    console.log(`\nTio Garlon: "Eu avisei para tomar cuidado com o Gato!"`)
                    FeiraCentral()
                } else {
                    console.log('Obrigado pelo favor jovem, pegue...')
                    console.log(`Ouro:${player.ouro} + 10`)
                    player.ouro += 10
                }
                break

            default:
                console.log('Opção inválida!')
                TioGarlon()
        }
    })
}

function LojaDePocoes() {
    console.log(`\n---Loja de poções!---`)
    console.log(`Você possui ${player.ouro} ouros.`)


    console.log(`1 - Poção de Cura -> 12 Ouros`)
    console.log(`2 - Poção de Mana -> 16 Ouros`)
    console.log(`3 - Poção de Veneno -> 20 Ouros`)
    console.log(`4 - Sair da Loja`)

    readline.question('O que deseja comprar?', opção => {

        if (opção === '1') {
            if (player.ouro >= 12) {
                player.ouro -= 12
                player.mochila.push({
                    nome: 'Poção de Cura',
                })
                console.log(`${player.nome}, sua poção foi adicionada ao seu inventário`)
                LojaDePocoes()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDePocoes()
            }
        }

        if (opção === '2') {
            if (player.ouro >= 16 && player.classe === 'Mago') {
                player.ouro -= 16
                player.mochila.push({
                    nome: 'Poção de Mana',
                })
                console.log(`${player.nome}, sua poção foi adicionada ao seu inventário`)
                LojaDePocoes()
            } else if (player.classe !== 'Mago') {
                    console.log('Guerreiros não precisam de Mana')
                    LojaDePocoes()
                } else {
                console.log('Você não possui ouro o suficiente')
                LojaDePocoes()
            }
        }

        if (opção === '3') {
            if (player.ouro >= 12) {
                player.ouro -= 12
                player.mochila.push({
                    nome: 'Poção de Veneno',
                })
                console.log(`${player.nome}, sua poção foi adicionada ao seu inventário`)
                LojaDePocoes()
            } else {
                console.log('Você não possui ouro o suficiente')
                LojaDePocoes()
            }
        }

        if (opção === '4') {
            console.log('Saindo do Ferreiro...')
            Velmorin()
        }

    })

}

const armas = {
    'Varinha de madeira': 5,
    'Varinha de Ferro': 10,
    'Espada de madeira': 5,
    'Espada de Ferro': 10,
    'Espada Encantada': 20,
}

function danoArma() {
    return armas[player.arma]
}

const danoMagias = {
    'Bola de fogo': 10
}

const Magias = ['Bola de fogo']


const armaduras = {
    'Armadura Couraça Sombria': 5,
    'Armadura Peitoral do Vento': 10,
    'Armadura Pele de Orc': 15,
    'Armadura Passos Silenciosos': 20,
    'Armadura Placas do Guerreiro': 25,
    'Armadura Véu da Sombra': 30,
    'Armadura Veloz da Caçada': 35,
    'Armadura Guardião das Trevas': 40,
    'Armadura Aço de Batalha': 45,
    'Armadura Ferro da Montanha': 50,
    'Armadura Orc Ancestral': 55,
    'Armadura Chifre da Besta': 60, // aumento 5 em 5 até aqui

    // agora aumenta 7 em 7 (a partir da próxima, excluso chifre da besta)
    'Armadura Escudo da Fortaleza': 67,
    'Armadura Casco de Dragão': 74,
    'Armadura Escamas Ardentes': 81,
    'Armadura Asa Flamejante': 88,
    'Armadura Escudo do Dragão': 95,

    // a partir da Fúria do Dragão aumenta 10 em 10
    'Armadura Fúria do Dragão': 105,
    'Armadura Garras Ardentes': 115,
    'Armadura Coração da Noite': 125
}

function defesaArmadura() {
    return armaduras[player.armadura] || 0
}

//---------------BATALHA---------------

function Batalha(inimigo, hpinimigo) {

    let derrotarInimigo = () => {


        if (hpinimigo <= 0) {
            console.log(`Você derrotou o ${inimigo}`)


            const recompensa = recompensas[inimigo]
            if (recompensa) {
                player.ouro += recompensa.ouro
                console.log(`Você recebeu ${recompensa.ouro} ouros!`)
            }

            MenuFinalDaBatalha = () => {

                console.log('\n---O que deseja fazer agora?---')
                console.log('1 - Retornar até a cidade')
                console.log('2 - Continuar se aventurando')

                readline.question('', opcao => {

                    switch (opcao) {
                        case '1': Cidade(); break
                        case '2': Aventura(); break

                        default:
                            console.log('Opção inválida!')
                            MenuFinalDaBatalha()
                    }
                })
            }

            MenuFinalDaBatalha()

            return
        } else {
            danoInimigo()
            Turno()
        }
    }

    let danoInimigo = () => {

        let danoInimigo = 15
        let chanceCriticoInimigo = Math.random()
        if (chanceCriticoInimigo <= 0.2) {
            danoInimigo += 15
            player.hp -= danoInimigo
            console.log(`Acerto crítico de ${inimigo}!`)
        } else {
            player.hp -= danoInimigo
        }

        console.log(`${inimigo} atacou você e causou ${danoInimigo} de dano`)

        if (player.hp <= 0) {
            console.log('Você foi derrotado... Fim da aventura')
            console.log(`Ouro: ${player.ouro} - 50`)
            player.hp = player.maxHp
            player.ouro -= 50
            Cidade()
            return
        }
    }

    const poçõesDisponiveis = {
        'Poção de Cura': {
            nome: 'Poção de Cura',
            usar: (player) => {
                if (player.hp == 100) {
                    console.log('Você está com a vida cheia!')
                } else {
                    player.hp = Math.min(player.hp + 50, 100);
                    console.log(`${player.nome} recuperou 50 de HP!`);
                }

            }
        },
        'Poção de Mana': {
            nome: 'Poção de Mana',
            usar: (player) => {
                if (player.mana == 80) {
                    console.log('Você está com a mana cheia!')
                } else {
                    player.mana = Math.min(player.mana + 50, 80);
                    console.log(`${player.nome} recuperou 50 de Mana!`);
                }
            }
        },
        'Poção de Veneno': {
            nome: 'Poção de Veneno',
            usar: (player) => {
                console.log(`Poção de Veneno Lançada em ${inimigo}`)
                 console.log(`Hp:${hpinimigo} - 40`)
                hpinimigo -= 40
            }
        },

    };

    function usarPoção() {
        const Pocoes = player.mochila
        console.log(`\n--- Suas poções ---`)

        if (Pocoes.length === 0) {
            console.log('Você não tem nenhuma poção!')
            return Turno()
        }

        Pocoes.forEach((pocao, index) => {
            console.log(`${index + 1} - ${pocao.nome}`)
        })

        readline.question('Escolha: ', opcao => {
            const index = parseInt(opcao) - 1

            if (index >= 0 && index < Pocoes.length) {
                const pocaoEscolhida = Pocoes[index]
                poçõesDisponiveis[pocaoEscolhida.nome].usar(player)
                Pocoes.splice(index, 1) // Remove a poção usada
            } else {
                console.log('Opção inválida!')
            }
            Turno()
        })
    }


    function Turno() {

        console.log(`\n--- Batalha contra ${inimigo} ---`)
        console.log(`ROVANI: HP:${player.hp} | Mana:${player.mana}\n${inimigo}: HP:${hpinimigo}`)
        console.log(`1 - Atacar`)
        console.log(`2 - Lançar Magia`)
        console.log(`3 - Usar poção`)
        console.log(`4 - Fugir`)




        readline.question('\nO que deseja fazer?', opcao => {
            if (opcao === '1') {
                let dano = danoArma() + player.força
                let chanceCritico = Math.random()
                if (chanceCritico <= 0.2) {
                    dano = danoArma() + player.força + 5
                    hpinimigo -= dano
                    console.log('Acerto crítico!')
                } else {
                    hpinimigo -= dano
                }
                console.log(`Você causou ${dano} de dano no ${inimigo}, que agora possui ${hpinimigo} de vida`)

                derrotarInimigo()
            }


            else if (opcao === '2' && player.classe === 'Mago' && player.mana >= 20) {
                console.log(`Agora você conhecerá a dor ${inimigo}`)
                console.log(`\n---Suas Magias---`)
                Magias.forEach((magia, index) => {
                    console.log(`${index + 1} - ${magia}`)
                })

                readline.question('Escolha: ', opcao => {
                    const index = parseInt(opcao) - 1

                    if (index >= 0 && index < Magias.length) {
                        const magiaEscolhida = Magias[index]

                        let dano = danoArma() + player.força + danoMagias[magiaEscolhida]


                        if (Math.random() <= 0.2) {
                            console.log('Acerto crítico!')
                            dano += 5
                            hpinimigo -= dano
                        } else {
                            hpinimigo -= dano
                        }

                        player.mana -= 20

                        console.log(`${magiaEscolhida} lançada!`)
                        console.log(`Você causou ${dano} de dano no ${inimigo}, que agora possui ${hpinimigo} de vida`);

                        derrotarInimigo()
                    } else {
                        Turno()
                    }
                }


                )
            }

            else if (opcao === '3') {
                usarPoção()
            }

            else if (opcao === '4') {
                console.log(`Que bom que conseguiu fugir a tempo ${player.nome}...`)
                Cidade()
            } else {
                console.log('Opção inválida!')
                Turno()
            }

        })


    }

    Turno()

}

const recompensas = {
    'Goblim': { ouro: 5 },
    'Ogro': { ouro: 12 },
    'Dragao Ancestral': { ouro: 50 }
}


iniciar()



//amanha vou adicionar o web com personagem feminino e masculino entre outras coisas
//testar o console do gasto de ouros na aposta
//Por enquanto na minha mochila se eu possui dois itens identicos ficara item,item. Quero deixar item x2


//Deixar a funcao usar pocao com opcao para qual pocao deseja usar!!!!
//para em seguida eu adicionar mais pocoes na loja



//com o npm iniciar o jogo com npm star
// dividir o jogo em varias pastas referente ao assunto para ficar mais facil de dar manutencao


// NO MOMENTO EU ESTAVA CONFIGURANDO QUAIS CLASSES PODEM ADQUIRIR SEUS ITENS LOJA

