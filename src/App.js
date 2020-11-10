import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles.css';





import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Position,
  Form
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { employees, states } from './data.js';


class App extends React.Component {
  render() {
     
    return (

      <div id="data-grid-demo">
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
        >
          <Paging enabled={false} />
          
            <Editing
            mode="popup"
            allowUpdating={true}>
            <Popup title= "Edit" showTitle={true} width={500} height={425}>
              <Position my="top" at="top" of={window} />
            </Popup>
            <Form>
              <Item itemType="group" colCount={1} colSpan={1}>
                
                <Item dataField="Name" />
                <Item dataField="Username" />
                <Item dataField="Email" />
              </Item>
             
            </Form>
          </Editing>

          <Column dataField="SNo" caption="S.No" width={70} />
          <Column dataField="Name" />
          <Column dataField="Username" />
          <Column dataField="Email" dataType="text" />
          
        </DataGrid>
      </div>
    );
  }
}

export default App;
