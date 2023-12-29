const HandForm = () => {
	return (
		<div>
			<label className="input-group mb-1">
				<span className="label">ساختار سازمانی:</span>
				<input
					type="text"
					value="شرکت فناوری اطلاعات فن آگین"
					disabled
				/>
			</label>

			<label className="input-group mb-1">
				<span className="label">شامل زیرشاخه ها</span>
				<input type="checkbox" />
			</label>

			<label className="input-group mb-1">
				<span className="label">دسترسی:</span>
				<input type="text" />
			</label>

			<label className="input-group mb-1">
				<span className="label">بخش های قابل مشاهده:</span>
				<select multiple>
					<option>فرم اولیه</option>
					<option selected>داینای اقلام</option>
					<option selected>محاسبه شرایط</option>
					<option>هزینه های تکمیلی</option>
					<option>مستندات</option>
				</select>
			</label>

			<label className="input-group mb-1">
				<span className="label">امکان ویرایش</span>
				<input type="checkbox" />
			</label>
		</div>
	);
};

export default HandForm;
