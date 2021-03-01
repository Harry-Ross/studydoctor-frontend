import { List, Menu, FileInput, Accordion, AccordionPanel } from 'grommet'
import { More } from 'grommet-icons';
import React, { Component } from 'react'

const data = [];

for (let i = 0; i < 5; i += 1) {
  data.push({
    entry: `file-${i + 1}.txt`,
  });
}

class FilesPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Accordion>
                    <AccordionPanel label="Software Design and Development">
                        <List
                            data={data}
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
                    </AccordionPanel>
                    <AccordionPanel label="English">
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
                    </AccordionPanel>
                    <AccordionPanel label="Maths Advanced">
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
                    </AccordionPanel>
                    <AccordionPanel label="Economics">
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
                    </AccordionPanel>
                    <AccordionPanel label="Design & Technology">
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
                    </AccordionPanel>
                    <AccordionPanel label="Physics">
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
                    </AccordionPanel>
                </Accordion>
            </div>
        );
    }
}
 
export default FilesPage;