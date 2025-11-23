     document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('comparator-form');
            const resetBtn = document.getElementById('reset-btn');
            const toggleBtn = document.getElementById('toggle-btn');
            const resultDiv = document.getElementById('result');
            
            // Validação de entrada
            function validateInput(input) {
                const errorElement = document.getElementById(`error${input.id.slice(-1)}`);
                
                if (input.value === '' || isNaN(input.value)) {
                    errorElement.style.display = 'block';
                    input.style.borderColor = '#e74c3c';
                    return false;
                } else {
                    errorElement.style.display = 'none';
                    input.style.borderColor = '#ddd';
                    return true;
                }
            }
            
            // Adicionar validação em tempo real
            document.getElementById('number1').addEventListener('blur', function() {
                validateInput(this);
            });
            
            document.getElementById('number2').addEventListener('blur', function() {
                validateInput(this);
            });
            
            // Processar o formulário
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const num1 = document.getElementById('number1');
                const num2 = document.getElementById('number2');
                
                // Validar todos os campos
                const isValid1 = validateInput(num1);
                const isValid2 = validateInput(num2);
                
                if (!isValid1 || !isValid2) {
                    return;
                }
                
                // Converter para números
                const n1 = parseFloat(num1.value);
                const n2 = parseFloat(num2.value);
                
                // Comparar os números
                let maior, menor, iguais, diferentes;
                
                if (n1 > n2) {
                    maior = n1;
                    menor = n2;
                } else if (n2 > n1) {
                    maior = n2;
                    menor = n1;
                } else {
                    maior = n1;
                    menor = n1;
                }
                
                if (n1 === n2) {
                    iguais = "Sim";
                    diferentes = "Não";
                } else {
                    iguais = "Não";
                    diferentes = "Sim";
                }
                
                // Exibir resultados
                document.getElementById('maior').textContent = maior;
                document.getElementById('menor').textContent = menor;
                document.getElementById('iguais').textContent = iguais;
                document.getElementById('iguais').className = iguais === "Sim" ? "result-value equal" : "result-value";
                document.getElementById('diferentes').textContent = diferentes;
                document.getElementById('diferentes').className = diferentes === "Sim" ? "result-value different" : "result-value";
                
                resultDiv.style.display = 'block';
            });
            
            // Limpar formulário
            resetBtn.addEventListener('click', function() {
                form.reset();
                resultDiv.style.display = 'none';
                document.querySelectorAll('.error').forEach(error => {
                    error.style.display = 'none';
                });
                document.querySelectorAll('input').forEach(input => {
                    input.style.borderColor = '#ddd';
                });
            });
            
            // Alternar entre 2 e 3 números
            toggleBtn.addEventListener('click', function() {
                window.location.href = '3numeros.html';
            }); 
        });