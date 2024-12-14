import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactInputMask from 'react-input-mask';
import './App.css';

function BasicExample() {
  return (
<>
<header>FORMULÁRIO</header>
<div className="custom-body">
  <Form>
  <Form.Text style={{ fontSize: '20px', textAlign: 'center', color: 'black', fontWeight: 'normal' }}>
  <p>Preencha suas informações de contato:</p>
</Form.Text>

  <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu Nome" />
        </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>E-mail</Form.Label>
      <Form.Control type="email" placeholder="Digite seu E-mail" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPhone">
  <Form.Label>Telefone</Form.Label>
  <ReactInputMask mask="(99) 9 9999-9999" maskChar={null} className="form-control" placeholder="(00) 0 0000-0000"/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escreva sua mensagem" />
        </Form.Group>

    <Form.Text className="text-muted">
      <p><center> Suas informações serão registradas para propósito de contato.</center></p>
      </Form.Text>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Aceitar as condições" />
    </Form.Group>

    <Button variant="primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>
      ENTRAR
    </Button>
  </Form>
</div>
<footer className="custom-footer">Nome Fictício &copy;2024 Todos os direitos reservados.</footer>
    </>
  );
}

export default BasicExample;