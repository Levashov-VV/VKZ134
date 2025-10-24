import './style.css';

interface Price {
    title: string;
    oneSide: number;
    twoSide: number;
    fiveSide: number;
}

interface SteleProps {
    stele: Price[][];
    thickness: number[];
}

export default function Stele({ stele, thickness }: SteleProps) {
    return (
        <>
            <h2 className="title-table">Стелы</h2>
            <div className="price-list">
                {stele.map((priceList, index) => (
                    <div className="table-block" key={index}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td colSpan={4}>
                                        Толщина{' '}
                                        {thickness[index] !== undefined
                                            ? thickness[index]
                                            : 'неизвестно'}{' '}
                                        мм
                                    </td>
                                </tr>
                                <tr>
                                    <td>Размер, мм</td>
                                    <td colSpan={3}>Цена, руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Полировка 1 сторона</td>
                                    <td>Полировка 2 стороны</td>
                                    <td>Полировка 5 сторон</td>
                                </tr>
                            </thead>
                            <tbody>
                                {priceList.map((price, i) => (
                                    <tr key={i}>
                                        <td>{price.title}</td>
                                        <td>{price.oneSide}</td>
                                        <td>{price.twoSide}</td>
                                        <td>{price.fiveSide}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </>
    );
}
