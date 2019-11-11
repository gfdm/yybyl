<section class="yy-hp">
  <div class="yy-hp__progress" style="width: {hp}%; background: {getColor(hp)};"></div>
  { hp.toFixed(2) }
</section>

<script>
  import data from '../data'

  export let hp = 0

  function getColor (hp) {
    let color = '#2ecc71'
    if (hp >= data[0].threshold) {
      color = '#2ecc71'
    } else if (hp >= data[1].threshold) {
      color = '#f1c40f'
    } else if (hp >= data[2].threshold) {
      color = '#e74c3c'
    } else {
      color = 'transparent'
    }
    return color
  }
</script>

<style>
.yy-hp {
  max-width: 144px;
  height: 6px;
  border-radius: 4px;
  background: #ecf0f1;
  overflow: hidden;
}
.yy-hp__progress {
  width: 100%;
  height: 100%;
  transition: all .2s;
}
</style>
