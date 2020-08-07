import React, { useMemo, useState } from "react";
import styled from "styled-components";
import constants from "../constants";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledTable = styled.table`
    width: 60%;
    background-color: ${constants.tableHeaderSurfaceColor};
`;

const StyledTableRow = styled.tr`
    width: 100%;
    & img {
        width: 100%;
    }
`;

const StyledTableEvenRow = styled(StyledTableRow)`
    background-color: ${constants.tableRowEvenSurfaceColor};
`;

const StyledTableOddRow = styled(StyledTableRow)`
    background-color: ${constants.tableRowOddSurfaceColor};
`;

const tableContent = [
    { item: "Chocolate", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Strawberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Vanilla", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
    { item: "Blueberry", itemImg: "https://via.placeholder.com/600x300" },
];

const TableRow = ({ item, itemImg, isEven }) =>
    isEven ? (
        <StyledTableEvenRow>
            <td>{item}</td>
            <td>
                <img src={itemImg} alt="" />
            </td>
        </StyledTableEvenRow>
    ) : (
        <StyledTableOddRow>
            <td>{item}</td>
            <td>
                <img src={itemImg} alt="" />
            </td>
        </StyledTableOddRow>
    );

const InformationComponent = () => {
    return (
        <div>
            <h3>Using Memo for optimization</h3>
            <p>
                In the example, even though the component state is changed when
                counter is incremented, the table will not rerender as its value
                is memoized due to the useMemo hook.
                <br />
                This can be checked using the React Profiler tool.
            </p>
        </div>
    );
};

const UseMemo = () => {
    const [count, setCount] = useState(0);

    const tableRows = useMemo(
        () =>
            tableContent.map((item, index) => (
                <TableRow {...item} isEven={index % 2 === 0} />
            )),
        [tableContent]
    );

    return (
        <StyledDiv>
            <InformationComponent />
            <div
                style={{
                    marginBottom: "2rem",
                    display: "flex",
                }}
            >
                <h4 style={{ marginRight: "1rem" }}>{count}</h4>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    Increment Count
                </button>
            </div>
            <StyledTable>
                <tr>
                    <th>Item</th>
                    <th>Image</th>
                </tr>
                {tableRows}
            </StyledTable>
        </StyledDiv>
    );
};

export default UseMemo;
