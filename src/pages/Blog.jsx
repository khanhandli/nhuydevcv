import React from 'react';
import LayoutComponent from '../components/LayoutComponent';
import axios from 'axios';

const Blog = () => {
    const [listBlog, setListBlog] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const res = await axios.get('https://nhuyblogapi.herokuapp.com/api/home/blogs?limit=6');
            console.log('🚀 ~ file: Blog.jsx ~ line 11 ~ res', res);
            setListBlog(res.data);
        })();
    }, []);

    return (
        <LayoutComponent>
            <div className="mt-4 h-full">
                <div className="grid grid-cols-2 gap-6">
                    {listBlog &&
                        listBlog.length > 0 &&
                        listBlog.map((itemCate, index) => {
                            return itemCate.blogs.map((item, index) => {
                                return (
                                    <div className="text-white h-[380px] rounded-xl bg-[#2C283A]" key={index}>
                                        <div className="max-h-[220px] h-[220px] rounded-xl">
                                            <img
                                                className="h-full w-full object-cover rounded-t-2xl"
                                                src={item.thumbnail}
                                                alt={index}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h2 className="text-lg font-bold mb-4">{item.title}</h2>
                                            <span
                                                className="text-md text-[#f2f2f2]"
                                                dangerouslySetInnerHTML={{ __html: item.description }}
                                            />
                                        </div>
                                    </div>
                                );
                            });
                        })}
                </div>
                COMING SOON ...
            </div>
        </LayoutComponent>
    );
};

export default Blog;
