<section>
  <Yy yy="{ currentYy }" />
  <Hp hp="{ currentHp }" />
</section>

<script>
  import Yy from './components/yy'
  import Hp from './components/hp'
  import data from './data'

  const TIMEOUT = 1000
  const MAX_HP = 100
  const MIN_HP = 0

  export let countdown = 60000

  let currentYy = data[0]
  let currentHp = MAX_HP

  let currentTime = countdown

  const timer = setInterval(() => {
    currentTime = currentTime - TIMEOUT
    if (currentTime < 0) {
      clearInterval(timer)
    } else {
      const rate = currentTime / countdown

      currentHp = MAX_HP * rate
      currentYy = data.find(item => item.threshold / 100 < rate)
    }
  }, TIMEOUT)
</script>

<style>
</style>
