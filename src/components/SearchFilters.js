import React from 'react';
import PropTypes from 'prop-types';
import{
    MultiDropdownList,
    SingleDropdownRange,
    RangeSlider,
} from '@appbaseio/reactivesearch';

const SearchFilters=({currentTopics,setTopics,visible})=>(
   <div className={`flex column filters-container ${!visible?'hidden': ''}`}>
       <div className='child m10'>
           <MultiDropdownList
            componentId='language'
            dataField='language.raw'
            placeholder='Select languages'
            title='Language'
            filterLabel='Language'
            />
       </div>
       <div className='childm10'>
           <MultiDropdownList
           componentId='topics'
           dataField='topics.raw'
           placeholder='Select Topics'
           title='Repo Topics'
           filterLabel='Topics'
           size={1000}
           queryFormat='and'
           defaultSelected={currentTopics}
           onValueChange={setTopics}
           />
       </div>
       <div className='child m10'>
           <SingleDropdownRange
           componentId='pushed'
           dataField='pushed'
           placeholder='Repo last acitve'
           title='Last Active'
           filterLabel='Last Active'
           data={[
               {start:'now-1M',end:'now',label:'Last 30 days'},
               {start: 'now-6M',end: 'now',label:'Last 6 months'},
               {start: 'now-1y', end: 'now', label: 'Last year'},
           ]}
           />
       </div>
       <div className="child m10">
			<SingleDropdownRange
				componentId="created"
				dataField="created"
				placeholder="Repo created"
				title="Created"
				filterLabel="Created"
				data={[
					{
						start: '2017-01-01T00:00:00Z',
						end: '2017-12-31T23:59:59Z',
						label: '2017',
					},
					{
						start: '2016-01-01T00:00:00Z',
						end: '2016-12-31T23:59:59Z',
						label: '2016',
					},
					{
						start: '2015-01-01T00:00:00Z',
						end: '2015-12-31T23:59:59Z',
						label: '2015',
					},
					{
						start: '2014-01-01T00:00:00Z',
						end: '2014-12-31T23:59:59Z',
						label: '2014',
					},
					{
						start: '2013-01-01T00:00:00Z',
						end: '2013-12-31T23:59:59Z',
						label: '2013',
					},
					{
						start: '2012-01-01T00:00:00Z',
						end: '2012-12-31T23:59:59Z',
						label: '2012',
					},
					{
						start: '2011-01-01T00:00:00Z',
						end: '2011-12-31T23:59:59Z',
						label: '2011',
					},
					{
						start: '2010-01-01T00:00:00Z',
						end: '2010-12-31T23:59:59Z',
						label: '2010',
					},
					{
						start: '2009-01-01T00:00:00Z',
						end: '2009-12-31T23:59:59Z',
						label: '2009',
					},
					{
						start: '2008-01-01T00:00:00Z',
						end: '2008-12-31T23:59:59Z',
						label: '2008',
					},
					{
						start: '2007-01-01T00:00:00Z',
						end: '2007-12-31T23:59:59Z',
						label: '2007',
					},
				]}
			/>
		</div>
		<div className="child m10">
			<RangeSlider
				componentId="stars"
				title="Repo Stars"
				dataField="stars"
				range={{ start: 0, end: 300000 }}
				showHistogram={false}
				rangeLabels={{
					start: '0 Stars',
					end: '300K Stars',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>
		<div className="child m10">
			<RangeSlider
				componentId="forks"
				title="Repo Forks"
				dataField="forks"
				range={{ start: 0, end: 180500 }}
				showHistogram={false}
				rangeLabels={{
					start: '0 Forks',
					end: '180K Forks',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>
   </div> 
);

SearchFilters.propTypes={
    currentTopics:PropTypes.arrayOf(PropTypes.string),
    setTopics:PropTypes.func,
    visible:PropTypes.bool, /**visible is to add a classname for styling */
};

export default SearchFilters;