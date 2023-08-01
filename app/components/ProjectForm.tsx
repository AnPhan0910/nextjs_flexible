'use client';
import { SessionInterface } from '@/common.types';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import FormField from './FormField';
import { categoryFilters } from '@/constants';
import CustomMenu from './CustomMenu';
import Button from './Button';

type Props = {
  type: string;
  session: SessionInterface;
};

const ProjectForm = ({ type, session }: Props) => {
  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes('image')) {
      return alert('Please update an image file');
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange('image', result);
    };
  };
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    image: null,
    title: '',
    description: '',
    liveSiteUrl: '',
    githubUrl: '',
    category: '',
  });

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form?.image && 'Choose a poster for your project'}
        </label>
        <input
          type="file"
          id="image"
          accept="image/"
          required={type === 'create'}
          onChange={handleChangeImage}
          className="form_image-input"
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project poster"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange('title', value)}
      />
      <FormField
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remarkable developer projects."
        setState={(value) => handleStateChange('description', value)}
      />
      <FormField
        type="url"
        title="Website URL"
        state={form.liveSiteUrl}
        placeholder="https://jsmastery.pro"
        setState={(value) => handleStateChange('liveSiteUrl', value)}
      />
      <FormField
        type="url"
        title="GitHub URL"
        state={form.githubUrl}
        placeholder="https://github.com/"
        setState={(value) => handleStateChange('githubUrl', value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange('title', value)}
      />

      {/* CustomInput Category... */}
      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange('category', value)}
      />

      <div className="flexStart w-full">
        <Button
          title={
            isSubmitting
              ? `${type === 'create' ? 'Creating' : 'Editing'}`
              : `${type === 'create' ? 'Create' : 'Edit'}`
          }
          type="submit"
          leftIcon={isSubmitting ? '' : '/plus.svg'}
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  );
};

export default ProjectForm;
