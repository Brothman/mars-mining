import './Grid.css';
import React from 'react';
import axios from 'axios';

const GRID_ROWS = 20;
const GRID_COLS = 20;
const NODES_URL = 'http://headlight-tournament-1.herokuapp.com/nodes';
const BOTS_URL = 'http://headlight-tournament-1.herokuapp.com/bots';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nodes: [],
            bots: [],
            grid: [
                    []
                  ],
         };
    }

    componentDidMount() {
        //firstPaint calls start
        this.firstPaint();

        //REMEMBER TO FACTOR IN DOWNTIME FOR DATA
    }

    /**
 * Fetches all known information about mineral nodes, and updates
 * the state object with that node information
 */
    refreshNodes = async () => {
        let result = await axios.get(NODES_URL);
        let payload = result.data['Nodes'];

        let nodes = {};

        for (let i = 0; i < payload.length; i++) {
            let node = payload[i];
            if (!nodes[node.Location.X]) {
                nodes[node.Location.X] = {};
            }
            nodes[node.Location.X][node.Location.Y] = node;
        }

        this.setState ({
            nodes,
        });
    }


    /**
* Fetches all known information about mineral nodes, and updates
* the state object with that node information
*/
    refreshBots = async () => {
        let result = await axios.get(BOTS_URL);
        let payload = result.data['Bots'];

        let bots = {};

        for (let i = 0; i < payload.length; i++) {
            let bot = payload[i];
            if (!bots[bot.Location.X]) {
                bots[bot.Location.X] = {};
            }
            bots[bot.Location.X][bot.Location.Y] = bot;
        }

        this.setState({
            bots,
        });
    }


    /** Display functions */

    /**
     * Determines the appropriate color for this grid cell,
     * based on whether a node, bot, both, or neither is located
     * within this grid cell
     */
    colorClass = (x, y) => {
        let nodes = this.state.nodes;
        let bots = this.state.bots;

        let nodePresent = nodes[x] && nodes[x][y];

        let botPresent = bots[x] && bots[x][y];

        if (nodePresent && botPresent) { // Node present
            return 'purple';
        }

        if (nodePresent) { // Node present
            return 'blue';
        }

        if (botPresent) { // Node present
            return 'red';
        }
        else { // Empty
            return 'white';
        }
    }



/** App functions */

/**
 * Changes the colors of the cells. The method adds an appropriate color class 
 * depending on whether this grid cell
 * contains a mineral node, a bot, or both.
 */
 paint = () => {

     const grid = this.state.grid;

    for (let i = 0; i < GRID_ROWS; i++) {
        for (let j = 0; j < GRID_COLS; j++) {
            // let template = document.getElementsByTagName("template")[0];
            
            let cell = grid[i][j];
            //should affect the DOM directly
            cell.className = "cell " + this.colorClass(i, j);
            
        }
    }
}

/**
 * Draws all the cells to the DOM. This is the only time we create cells.
 * Adds all the cell DOM nodes into a STATE-based grid 2d-array
 */
    firstPaint = () => {
        const grid = document.querySelector(".grid");
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        const stateGrid = this.state.grid;

        for (let i = 0; i < GRID_ROWS; i++) {
            for (let j = 0; j < GRID_COLS; j++) {
                let template = document.getElementsByTagName("template")[0];

                let cell = template.firstElementChild.cloneNode(true);
                cell.classList.add(this.colorClass(i, j));

                grid.appendChild(cell);
                
                let row = stateGrid[i];
                //initialize array for new row
                if (row === undefined) {
                    stateGrid[i] = [cell];
                }
                else {
                    stateGrid[i][j] = cell;
                }
            }
        }

        this.setState( {
            grid: stateGrid,
        }, () => this.start());
    }

/**
 * Main run loop. Every 1s, fetch nodes and bots and re-paint everything.
 */
 start = () => {
    setInterval(() => {
        this.refreshNodes();
        this.refreshBots();
        this.paint();
    }, 1000);
}


    render() { 
        return ( 
            <div className="grid">
            </div>
         );
    }
}
 
export default Grid;