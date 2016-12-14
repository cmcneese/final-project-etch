export default function() {
  this.transition(
    this.hasClass('to-left'),
    this.use('toUp')
  );
}
