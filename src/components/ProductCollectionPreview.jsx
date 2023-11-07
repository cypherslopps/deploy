import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Select } from './ui/Input';
import ProductFilterButton from './ProductFilterButton';
import ProductFilterBox from './ProductFilterBox';
import ProductsCollectionOverview from './ProductsCollectionOverview';
import MobileProductFIlterBox from './MobileProductFIlterBox';
import { cn } from '../lib/utils';

const ProductCollectionPreview = ({ showHeader, heading, showFilter=true, showSortSelect=true }) => {
    const { productName } = useParams();
    const [productSortValue, setProductSortValue] = useState("");
    const [isFilterBoxOpen, toggleFilterBoxOpen] = useState(true);
    // const [searchParams, setSearchParams] = useSearchParams();
    // const testing = searchParams.get("testing");

    // useEffect(() => {
    //     setSearchParams({ testing: "random" })
    // }, []);
    
    return (        
        <div className="wrapper md:p-2">
            {!showHeader && (
                <header className={cn('pt-4 text-center direction-rtl', heading?.headerClassName ?? "")}>
                    {heading ? (
                        <>
                            {/* Product Title */}
                            <h1 className={cn('text-[1.8rem] font-light md:text-[2rem]', heading?.titleClassName ?? "")}>{heading.title}</h1>
                            {heading?.subTitle && (
                                <span className='text-md font-light'>{heading?.subTitle}</span>
                            )}
                        </>
                    ) : (
                        <>
                            <h1 className='text-[1.8rem] md:text-[2rem] font-light'>בחרו את ה-Apple Watch שלכם!</h1>
                            <span className='text-md font-light'>SE</span>
                        </>
                    )}
                </header>
            )}

            {/* Product Filter Box */}
            {showFilter && (
                <MobileProductFIlterBox
                    data={{
                        "סוג מוצר": ["AirTag", "Apple TV", "Product Red"],
                        "יצרן": ["12 twelve south", "ANKER", "ANKR"]
                    }}
                />
            )}

            {/* Actions */}
            {(showSortSelect && showFilter) && (
                <div className='flex items-center justify-center md:justify-between mt-8 md:mt-1 direction-rtl'>
                    {/* Product Filter Button */}
                    {showFilter && (
                        <ProductFilterButton toggleFilterBoxOpen={() => toggleFilterBoxOpen(props => !props)} />
                    )}

                    {/* Product Sort */}
                    {showSortSelect && (
                        <Select 
                            title="מיין לפי:"
                            label=" מיין לפי:"
                            className="text-md pr-3 direction-rtl"
                            options={[
                                {
                                    key: "Recommended",
                                    value: "position"
                                },
                                {
                                    key: "Newest",
                                    value: "open_date"
                                },
                                {
                                    key: "Delivery times",
                                    value: "shipping_date"
                                },
                                {
                                    key: "Price: low to high",
                                    value: "low_to_high_price"
                                },
                                {
                                    key: "Price: high to low",
                                    value: "high_to_low_price"
                                },
                            ]}
                            value={productSortValue}
                            onChange={({ target }) => setProductSortValue(target.value)}
                        />
                    )}
                </div>
            )}

            {/* Products */}
            <main className={`grid grid-cols-1 md:grid-cols-[1fr_max-content] gap-x-4 ${(!showFilter && !showSortSelect) ? "mt-6 lg:mt-8" : "mt-6 sm:mt-4 md:mt-2"}`}>
                {/* Products Collection Overview */}
                <ProductsCollectionOverview />

                {/* Products Filter Box */}
                {(isFilterBoxOpen && showFilter) && (
                    <ProductFilterBox 
                        isOpen={isFilterBoxOpen}
                        data={{
                            "סוג מוצר": ["AirTag", "Apple TV", "Product Red"],
                            "יצרן": ["12 twelve south", "ANKER", "ANKR"]
                        }}
                    />
                )}
            </main>
        </div>
    )
}

export default ProductCollectionPreview