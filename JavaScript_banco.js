let saldo = window.document.querySelector('#isaldo');
        let Saldo = Number(saldo.innerHTML); /* Atribuindo um valor de antemão */
        let res = window.document.querySelector('#res');
        let titular = window.document.querySelector('#ititular');

        function enviar() {
            let depositar = window.document.querySelector('#idepositar');
            let Depositar = Number(depositar.value);

            if (Depositar > 0) {
                Saldo += Depositar;
                saldo.innerHTML = Saldo.toFixed(2); // Atualize o elemento saldo
                res.innerHTML = `Olá, ${titular.value}! Você tinha R$ ${Saldo.toFixed(2)} na sua conta e acabou de depositar R$ ${Depositar.toFixed(2)} no seu saldo.`;
            } else {
                res.innerHTML = "Por favor, insira um valor válido para depósito.";
            }
            
        function Consultar() {
            res.innerHTML = `O seu saldo atual é: R$${Saldo.toFixed(2)},00`;
        }

        window.addEventListener('load', function () {
            // Atualizar o elemento saldo com o valor inicial
            saldo.innerHTML = Saldo.toFixed(2);

            // Inicializar o elemento res com o saldo inicial
            res.innerHTML = `O seu saldo atual é: R$${Saldo.toFixed(2)},00`;
        });
        }


        // Listener para os botões
        document.getElementById('botaoDepositar').addEventListener('click', enviar);
        document.getElementById('botaoConsultar').addEventListener('click', Consultar);