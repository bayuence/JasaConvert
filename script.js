
          function convertCurrency() {
            const usdInput = document.getElementById('usdInput');
            const usd = parseFloat(usdInput.value);

            if (isNaN(usd) || usd < 1) {
              alert('Masukkan jumlah USD yang valid (min. 1)');
              return;
            }

            const kurs = 15000;
            const idrBeforeFee = usd * kurs;
            const adminFee = idrBeforeFee * 0.05;
            const totalIDR = idrBeforeFee - adminFee;

            const formatter = new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0
            });

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
              <div class="mb-2"><strong>Sebelum dipotong biaya admin:</strong> ${formatter.format(idrBeforeFee)}</div>
              <div class="mb-2 text-danger"><strong>Biaya admin (5%):</strong> ${formatter.format(adminFee)}</div>
              <div class="mt-3 text-success"><strong>Jumlah yang diterima:</strong> <span class="fs-5">${formatter.format(totalIDR)}</span></div>
            `;
            resultDiv.style.display = 'block';
          }

          document.getElementById("convertButton").addEventListener("click", convertCurrency);
        



