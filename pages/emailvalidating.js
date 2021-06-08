import EmailValidatingForm from '../src/EmailValidatingForm';

export async function getServerSideProps() {
    return {
        props: {}
    }
}

function emailvalidating() {
  return <EmailValidatingForm />;
}

export default emailvalidating;