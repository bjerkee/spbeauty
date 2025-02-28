import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 217px;
    height: 34;
`;

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    color: #94A3B8;
    width: 100%;
    &:hover {
        background: linear-gradient(180deg, #DFEAF1 0%, #CFDDE8 100%);
    }
    &:focus {
        background: white;
    }
`;

const SearchIconWrapper = styled.div`
    background-color: #;
    position: absolute;
    box-sizing:border-box;
    right: 16px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='text-rg p-2 px-3' placeholder='Найти'/>
            <SearchIconWrapper className='p-0'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;