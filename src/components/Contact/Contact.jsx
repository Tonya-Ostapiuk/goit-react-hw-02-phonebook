
import { LiStyled, BtnStyled } from './Contact.styled'
import propTypes from 'prop-types';

export function Contact({ contact, contactDelete }) {
  return (
    <LiStyled key={contact.id}>
      {contact.name} : {contact.number}
      <BtnStyled
        type="button"
        onClick={() => contactDelete(contact.id)}> Delete </BtnStyled>
    </LiStyled>
  )
}

Contact.propTypes = {
  contact: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  
  contactDelete: propTypes.func.isRequired,

};