import bootstrap from 'bootstrap/dist/js/bootstrap'

export default ({ app }, inject) => {
  inject('Modal', element => new bootstrap.Modal(element))
}
