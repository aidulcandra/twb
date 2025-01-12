let shareData = {
        title: 'BK3N',
        text: 'Semarak Bulan K3 Nasional',
        url: 'https://twibbonk3.netlify.app/',
      }

      const btn = document.querySelector('em');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'Shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: Share canceled!'
          )
      });
