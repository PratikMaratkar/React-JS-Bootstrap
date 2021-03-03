import {Table} from 'react-bootstrap';
import './Style.css';

function TableComponent() {
    return (
      <div className="table">
          <h2>Table with Bootstrap (Hover & Striped)</h2><br/>
          <Table striped bordered hover>
              <thead>
              <tr>
                <th>SrNo.</th>
                <th>UserName</th>
                <th>User Age</th>
                <th>User Ph.No</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Pratik</td>
                <td>24</td>
                <td>8087484627</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Anuj</td>
                <td>24</td>
                <td>9922288940</td>
            </tr>
            
            </tbody>
            </Table>
            <br/>

            <h2>Table with Bootstrap (Dark Variant & Small Size)</h2><br/>
             <Table variant="dark" striped bordered hover size='sm'>
            <thead>
            <tr>
                <th>SrNo.</th>
                <th>UserName</th>
                <th>User Age</th>
                <th>User Ph.No</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Pratik</td>
                <td>24</td>
                <td>8087484627</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Anuj</td>
                <td>24</td>
                <td>9922288940</td>
            </tr>
            
            </tbody>
            </Table>
            <br/>

            <h2>Table with Bootstrap </h2><br/>
             <Table responsive>
            <thead>
            <tr>
                <th>SrNo.</th>
                <th>UserName</th>
                <th>User Age</th>
                <th>User Ph.No</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Pratik</td>
                <td>24</td>
                <td>8087484627</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Anuj</td>
                <td>24</td>
                <td>9922288940</td>
            </tr>
            
            </tbody>
            </Table>
            <hr/>
      </div>
    );
}
export default TableComponent;