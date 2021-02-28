import { List, Menu } from 'grommet'
import { More } from 'grommet-icons';
import React, { Component } from 'react'

const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `file-${i + 1}.pdf`,
  });
}

class FilesPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <List
                    data={data.slice(0, 10)}
                    pad={{ left: 'small', right: 'none' }}
                    action={(item, index) => (
                    <Menu
                        key={index}
                        icon={<More />}
                        hoverIndicator
                        items={[{ label: 'one' }]}
                    />
                    )}
                />
            </div>
        );
    }
}
 
export default FilesPage;