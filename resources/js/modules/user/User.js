import Model from '../../utils/Model'

class User extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.name = props.name || ''
    this.email = props.email || ''
    this.address = props.address || ''
    this.about = props.about || ''
  }
}

export default User
