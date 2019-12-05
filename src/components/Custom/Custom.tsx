import React, {useEffect, useRef, useState} from 'react';
import './Custom.css'

const Custom = () => {
    const [show, setShow] = useState<any>(false);
    const [text, setText] = useState<any>(false);
    const [top, setTop] = useState<any>(0);
    const [left, setLeft] = useState<any>(0);
    const [height, setHeight] = useState<any>(0);
    const [width, setWidth] = useState<any>(200);
    const tooltipRef = useRef<HTMLInputElement>(null);

    const handleClick = (e: any) => {
        setShow(true);
        setLeft(e.target.offsetLeft +7);
        setTop(e.target.offsetTop -8);
        setText(e.target.id);
    };

    const handleClose = () => {
        setShow(false)
    };

    const getToolTip = () => {
        return <div style={{
            top: 0,
            left: 0,
            transform: `translate3d(${left - width/2}px, ${top -height}px, 0px)`,
            display: `${show ? "block": "none"
            }`}}
                    className="tooltip-km"
                    id="tooltip-km"
                    ref={tooltipRef}
        >
            <div className="d-flex">
                <div>
                    <span>{text}</span>
                </div>
                <div className="m-1">
                    <span onClick={handleClose}>
                        <i className="fa fa-times" aria-hidden="true"/>
                    </span>
                </div>
            </div>
            <div className="arrow-down"></div>
        </div>
    };

    const handleClickOutside = (e: any) => {
        // @ts-ignore
        if (!tooltipRef.current.contains(e.target)){
            setShow(false)
        }
    };

    if (show){
        document.addEventListener('mousedown', handleClickOutside, false)
    } else {
        document.removeEventListener('mousedown', handleClickOutside, false)
    }

    useEffect(() => {
        let doc: any = document.getElementById('tooltip-km')
        // @ts-ignore
        let width: any = doc.offsetWidth
        // @ts-ignore
        let height: any = doc.offsetHeight
        if (width !== 0 ){
            setWidth(width);
        }
        if (height !== 0){
            setHeight( height);
        }
    }, [show]);

    return (
        <div>
            {getToolTip()}
            <div className="m-5">
                <i className="fas fa-info-circle"
                   onClick={ (e) => handleClick(e)}
                   id="hello this is first tool tip example"/>
            </div>
            <div className="m-5">
                <i className="fas fa-info-circle"
                   onClick={ (e) => handleClick(e)}
                   id="Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text
                     ever since the 1500s" />
            </div>
            <div className="m-5">
                <i className="fas fa-info-circle"
                   onClick={ (e) => handleClick(e)}
                   id="t is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout." />
            </div>
            <div className="m-5">
                <i className="fas fa-info-circle"
                   onClick={ (e) => handleClick(e)}
                   id="The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters,
                   as opposed to using 'Content here, content here',
                    making it look like readable English. " />
            </div>
        </div>
    );
};

export default Custom;
