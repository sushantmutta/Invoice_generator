import React from 'react'
import { templates } from '../assets/assets'

const TemplateGrid = ({onTemplateClick}) => {
  return (
    <div className="row g-3">
      {templates.map(({ id, label, image }) => (
        <div className="col-12 col-sm-6 col-lg-4" key={id}>
          <div
            className="border rounded shadow-sm overflow-hidden template-hover cursor-pointer"
            title={label} 
            onClick={() => onTemplateClick(id)}// ✅ Fixed: dynamic title
          >
            <img
              src={image}       // ✅ Fixed: dynamic image source
              alt={label}       // ✅ Fixed: dynamic alt text
              className="w-100"
              loading="lazy"    // ✅ Fixed: loading attribute
            />
            <div className="p-2 text-center fw-medium">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TemplateGrid
